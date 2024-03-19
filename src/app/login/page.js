"use client";
import React, { useEffect, useState } from "react";
import Loginform from "@/components/LoginForm/Loginform";
import styles from "./login.module.css";
import { useRouter } from "next/navigation";
const LoginPage = () => {
  const [data, setdata] = useState([]);
  const router = useRouter();

  const getregistrationData = async () => {
    const rData = await fetch("/api/Login");
    const result = await rData.json();
    setdata(result);
  };

  useEffect(() => {
    getregistrationData();
  }, []);
  console.log(data);

  const handledata = async (regData) => {
    console.log(regData);
    const uploaddata = await fetch("/api/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(regData),
    });

    localStorage.setItem("loginData", JSON.stringify(regData));
    router.push("/");
    window.location.reload();
  };

  const handleLogindata = (loginData) => {
    const filterdata = data.find((userData) => {
      return (
        userData.email === loginData.email &&
        userData.password === loginData.password
      );
    });

    if (filterdata) {
      localStorage.setItem("loginData", JSON.stringify(filterdata));
      router.push("/");
      window.location.reload();
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className={styles.logincontainer}>
      <Loginform addDate={handledata} addlogindata={handleLogindata} />
    </div>
  );
};
export default LoginPage;
