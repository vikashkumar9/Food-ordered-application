"use client";
import React, { useState } from "react";
import styles from "./loginform.module.css";
import Button from "../ui/Button";
const Loginform = ({ addDate, addlogindata }) => {
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btntype, setBtntype] = useState("Register");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (btntype == "Register") {
      addDate({ username, email, password });
    } else {
      addlogindata({ email, password });
    }
    setusername("");
    setEmail("");
    setPassword("");
  };
  const login = () => {
    setBtntype("Login");
  };
  const register = () => {
    setBtntype("Register");
  };
  return (
    <div>
      <div className={styles.registration_form_container}>
        <form onSubmit={handleSubmit} className={styles.registration_form}>
          <h2>{btntype == "Register" ? " Registration" : "Login"}</h2>
          {btntype == "Register" && (
            <div className={styles.form_group}>
              <label>Enter user name</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                required
              />
            </div>
          )}
          <div className={styles.form_group}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.form_group}>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className={styles.registration_btn}>
            {btntype}
          </button>
          <div className={styles.reg_ligin}>
            <Button onClick={login}>login</Button>
            <Button onClick={register}>register</Button>
          </div>
        </form>{" "}
      </div>
    </div>
  );
};

export default Loginform;
