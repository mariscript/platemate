import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useToken } from "./AuthenticateUser"

export default function Signup() {
  // set the state for the info we want to keep track of
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirst] = useState("");
  const [last_name, setLast] = useState("");
  const [zipcode, setZip] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [ , , , signup] = useToken()

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    signup(first_name,last_name,email,zipcode,password)
    if (signup = false){
      setErrorMessage("Could not create account. Please try again")
    } //not sure if this will work
    setEmail("");
    setPassword("");
    setFirst("");
    setLast("");
    setZip("");
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
