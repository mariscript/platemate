import { useState } from "react";
import { useToken } from "./AuthenticateUser";
import { useNavigate } from "react-router-dom"

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token , login] = useToken();
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    login(email, password)
    setEmail("");
    setPassword("");
    navigate("/")
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

      <div className="flex items-center">
            <a
              href="/signup"
              className="mb-6 mt-4 mx-auto text-black-500 background-transparent font-bold underline uppercase text-sm focus:outline-none ease-linear transition-all duration-150 hover:text-white content-"
            >
              Don't have an account?
            </a>
          </div>

    </>
  );
}
