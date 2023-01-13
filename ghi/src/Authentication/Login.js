import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useToken } from "./AuthenticateUser";



export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function LoginComponent() {
  const [token, login] = useToken();
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("username", email);
    form.append("password", password);
    const url = "http://localhost:8000/token";
    const fetchConfig = {
      method: "POST",
      body: form,
      credentials: "include",
    };
    const response = await fetch(url, fetchConfig);
    console.log(response);
    if (response.ok) {
      LoginComponent();
      setEmail("");
      setPassword("");
      navigate("/");
    }
    // error handle for if not a valid account
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder="email"
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          placeholder="password"
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button>Order Up!</button>
      </form>
    </>
  );
}
