import { useState } from "react";
import axios from "axios";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    console.log(email, password);
    await axios.post(
      "http://localhost:5000/api/auth/login",
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );
  };
  return (
    <>
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>signin</button>
    </>
  );
};

export default Signin;
