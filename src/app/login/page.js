"use client";
import React, { useEffect, useState } from "react";
import Loginform from "@/components/LoginForm/Loginform";
import styles from "./login.module.css";
const LoginPage = () => {
  //   const [data, setdata] = useState([]);
  const handledata = async (regData) => {
    const uploaddata = await fetch("/api/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(regData),
    });
    console.log(regData);
  };

  const handleLogindata = (loginData) => {
    console.log(loginData);
  };

  return (
    <div className={styles.logincontainer}>
      <Loginform addDate={handledata} addlogindata={handleLogindata} />
    </div>
  );
};
export default LoginPage;
