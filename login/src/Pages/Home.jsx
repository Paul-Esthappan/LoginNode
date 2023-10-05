import React from "react";
import { Link } from "react-router-dom";
import LoginPage from "./LoginPage";


function Home() {


  return (
    <div>
      <h1>WELCOME</h1>
      <p>Already have an account</p>
      <LoginPage/>
      <p>Dont have an Account</p>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
      
    </div>
  );
}

export default Home;
