import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import axios from "axios";
import "./Log.css";

function LogForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailchange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasschange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };
    // const response = axios.post("http://localhost:5000/signin", user).then((result) => {
    //   setEmail("");
    //   setPassword("");
    // });

    try {
          const response = await axios({
              method: "post",
              url: "http://localhost:5000/signin",
              data: user
          })
          console.log(response.data)
          alert(response.data.Message)
      } catch (error) {
        console.log(error)
        alert(error)  
      }
  };

  return (
    <div className="container-1">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1 className="heading">Signin</h1>
        <label>Email:</label>
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => handleEmailchange(e)}
        />
        <br />

        <label>Password:</label>
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => handlePasschange(e)}
        />
        <br />

        <button
          className="btn-1"
          type="submit"
          value="Submit"
          onClick={(e) => handleSubmit}
        >
          Signin
        </button>
        <Link to="/">
          <button className="btn-2">Signup</button>
        </Link>
      </form>
    </div>
  );
}

export default LogForm;
