import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };

    const url = "http://localhost:8000/api/accounts";

    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    // userResponse for setting token...etc goes here
  };

  return (
    <>
      <div>Hello!</div>
    </>
  );
}
