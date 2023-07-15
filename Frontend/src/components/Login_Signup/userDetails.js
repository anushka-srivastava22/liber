//import React, { useEffect, useState } from "react";
import React, { useState, useEffect } from "react";
import UserHome from "./UserHome";

export default function UserDetails() {
  const [userData, setUserData] = useState("");
  
  useEffect(() => {
    fetch("http://localhost:3000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");

        setUserData(data.data);
      });
  }, []);

  return ( <UserHome userData={userData} />);
}