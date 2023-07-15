import React, { Component, useEffect, useState } from "react";
import styles from "./UserHome.module.css";

export default function UserHome({ userData }) {

    return (
        <div className={styles.background}>
            <div style={{ marginLeft: "30%", marginRight: "25%", marginTop: "100px", marginBottom: "30px" }}>
                <div>
                    <h1 style={{ background:"white", border: "1px solid white", fontFamily: "sans-serif", fontSize: "35px", fontWeight: "bold italic", marginTop: "40px", marginBottom: "30px" }}>Welcome To Liber - Your Study Partner</h1>
                    <div style={{ background:"white", border: "1px solid black", marginTop: "25px", marginBottom: "75px", marginRight: "15%", borderRadius: "30px", padding: "60px" }}>
                        <h1 style={{ fontFamily: "cursive", fontSize: "30px", fontWeight: "bold", textAlign: "center" }}>Your Info</h1>
                        <h1 style={{ fontFamily: "san-serif", fontSize: "20px", fontWeight: "bold", textAlign: "center", marginTop: "25px" }}>  Name : {userData.fname}</h1>
                        <h1 style={{ fontFamily: "san-serif", fontSize: "20px", fontWeight: "bold", textAlign: "center", marginTop: "25px" }}> Email ID: {userData.email}</h1>
                        <br />
                    </div>


                </div>
            </div>
        </div>
    );
}