"use client";
import axios from "axios";
import React, { useState } from "react";

export default function Signin() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="w-screen h-screeen flex justify-center items-center">
      <div className="border p-2">
        <input type="text" placeholder="usernmame" />
        <input type="password" placeholder="password" />
        <button
          onClick={() => {
            axios.post("", {
              username,
              password,
            });
          }}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
