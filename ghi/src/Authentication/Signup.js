import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup(props) {
  // set the state for the info we want to keep track of
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirst] = useState("");
  const [last_name, setLast] = useState("");
  const [zipcode, setZip] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = {
  //     first_name: first_name,
  //     last_name: last_name,
  //     email: email,
  //     zipcode: zipcode,
  //     password: password,
  //   };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const signupUrl = "http://localhost:8000/api/accounts";
    const fetchConfig = {
      method: "post",
      // remember to stringify json
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
    };
    const response = await fetch(signupUrl, fetchConfig);

    if (response.ok) {
      setEmail("");
      setPassword("");
      setFirst("");
      setLast("");
      setZip("");
    } else {
      setErrorMessage(
        "Cannot create account at this time. Please contact support."
      );
    }
  };

  return (
    <>
      <h1>Sign Up!</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder="First Name"
          required
          type="text"
          onChange={(e) => setFirst(e.target.value)}
          value={first_name}
        />
        <input
          placeholder="Last Name"
          required
          type="text"
          onChange={(e) => setLast(e.target.value)}
          value={last_name}
        />
        <input
          placeholder="Email"
          required
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          placeholder="Zipcode"
          required
          type="text"
          onChange={(e) => setZip(e.target.value)}
          value={zipcode}
        />
        <input
          placeholder="Password"
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button className>Order Up!</button>
      </form>
      <p>{errorMessage}</p>
    </>
  );
}
