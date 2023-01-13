import { useState } from "react";
import { useToken } from "./AuthenticateUser";

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, login] = useToken();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    login(email, password)
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
