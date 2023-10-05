import React from 'react'
import axios from "axios";
import { useState } from "react";
import { publicRequest } from '../axios/request';
import { Link, useNavigate } from 'react-router-dom';

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState('')
  const [phonenumber, setPhonenumber] = useState('')

  const navigate = useNavigate()

  async function submit(e) {
    e.preventDefault();
    try {
      await publicRequest
        .post("/signup", { email, password, name, phonenumber })
        .then((res) => {
          alert(res.data);
          console.log("Signup sucess", res.data);
        });
    } catch (error) {
      console.log(error);
    };
    navigate("/userpage");
  }

  return (
    <div>
      <h1>Signin Page</h1>
      <form>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="email address abc@email.com"
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        />
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="name"
        />
        <label>Phone Number</label>
        <input
          type="text"
          value={phonenumber}
          onChange={(e) => {
            setPhonenumber(e.target.value);
          }}
          placeholder="Phone number 10 digit"
        />
        <input type="submit" onClick={submit} />
      </form>
     
    </div>
  );
}

export default SignupPage