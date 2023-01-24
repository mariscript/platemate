import { createContext, useContext, useEffect, useState } from "react";
import { redirect } from "react-router-dom";
let internalToken = null;

export function getToken() {
  return internalToken;
}

export async function getTokenInternal() {
  const url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/token/`;
  try {
    const response = await fetch(url, {
      credentials: "include",
    });
    if (response.ok) {
      const data = await response.json();
      internalToken = data.access_token;
      return internalToken;
    }
  } catch (e) {}
  return false;
}

export function handleErrorMessage(error) {
  if ("error" in error) {
    error = error.error;
    try {
      error = JSON.parse(error);
      if ("__all__" in error) {
        error = error.__all__;
      }
    } catch {}
  }
  if (Array.isArray(error)) {
    error = error.join("<br>");
  } else if (typeof error === "object") {
    error = Object.entries(error).reduce(
      (acc, x) => `${acc}<br>${x[0]}: ${x[1]}`,
      ""
    );
  }
  return error;
}

export const AuthContext = createContext({
  token: null,
  setToken: () => null,
});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export function useToken() {
  const { token, setToken } = useAuthContext();
  const [dupEmailError, setDuplicateEmail] = useState(false)

  useEffect(() => {
    async function fetchToken() {
      const token = await getTokenInternal();
      setToken(token);
    }
    if (!token) {
      fetchToken();
    }
  }, [setToken, token]);

  async function login(email, password) {
    const url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/token/`;
    const form = new FormData();
    form.append("username", email);
    form.append("password", password);
    const response = await fetch(url, {
      method: "post",
      credentials: "include",
      body: form,
    });
    if (response.ok) {
      const token = await getTokenInternal();
      setToken(token);
      return response;
    }
    else{
      return response
    }
    let error = await response.json();
    return handleErrorMessage(error);
  }

  async function logout() {
    if (token) {
      const url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/token/`;
      await fetch(url, { method: "delete", credentials: "include" });
      internalToken = null;
      setToken(null);
      return redirect("/");
    }
  }

  async function signup(first_name, last_name, email, zipcode, password) {
    const url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/api/accounts/`;
    const response = await fetch(url, {
      method: "post",
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        zipcode,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok){
      await login(email, password);
      return response}
    else {
      return response;
    }
  }

  async function update(first_name, last_name, email, zipcode, password) {
    const url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/api/accounts/me`;
    const response = await fetch(url, {
      method: "put",
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        zipcode,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      await login(email, password);
    }
    return false;
  }

  async function updateallergy(seafood, gluten_free, account_id) {
    const url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/api/allergies/me`;
    const response = await fetch(url, {
      method: "put",
      body: JSON.stringify({
        seafood,
        gluten_free,
        account_id
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
    });
    return;
  }

    async function updatedietrestrict(vegan, vegetarian, halal, account_id) {
    const url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/api/diet_restrict/me`;
    const response = await fetch(url, {
      method: "put",
      body: JSON.stringify({
        vegan,
        vegetarian,
        halal,
        account_id
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
    });
    return;
  }

  async function createallergy(seafood, gluten_free, account_id) {
    const url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/api/allergies`
    const response = await fetch(url, {
      method: "post",
      body: JSON.stringify({
        seafood,
        gluten_free,
        account_id
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return;

  }

  async function createdietrestrict(vegan, vegetarian, halal, account_id) {
    const url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/api/diet_restrict`
    const response = await fetch(url, {
      method: "post",
      body: JSON.stringify({
        vegan,
        vegetarian,
        halal,
        account_id
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
    });
    return;
  }

  return [token, login, logout, signup, update, updateallergy, updatedietrestrict, createallergy, createdietrestrict,dupEmailError];
}
