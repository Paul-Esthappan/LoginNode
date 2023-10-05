import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {userLogin} from '../Features/user/userSlice'
import { publicRequest } from "../axios/request";
function LoginPage() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await publicRequest.post("/login", {
        email,
        password,
      });
      console.log("login success", response.data);
      dispatch(userLogin(response.data)) 
      navigate("/userpage");
    } catch (error) {
      console.error(error);
      setErrorMessage("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email address abc@email.com"
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" onClick={submit} disabled={loading}>
          {loading ? "Logging in..." : "Log In"}
        </button>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </form>
      <Link to="/signup">Dont have an account? signup here</Link>
    </div>
  );
}

export default LoginPage;
