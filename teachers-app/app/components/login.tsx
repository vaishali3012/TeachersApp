"use client";

import { useState } from "react";

export default function Login() {
  const [isValidEmail, setisvalidEmail] = useState(false);
  const [isValidPassword, setisValidPassword] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const onLoginClick = () => {
    if (password === "") {
      setisValidPassword(true);
    }
    if (email === "") {
      setisvalidEmail(true);
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <div>
        <input
          type="text"
          data-testid="email-input"
          name="email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        {isValidEmail && (
          <div className="text-red-400" data-testid="email-errormessage">
            Email is required
          </div>
        )}
      </div>
      <div>
        <input
          type="password"
          data-testid="password-input"
          name="password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        {isValidPassword && (
          <div className="text-red-400" data-testid="password-errormessage">
            Password is required
          </div>
        )}
      </div>
      <button
        data-testid="login-input"
        className="rounded-full bg-sky-400 w-32"
        onClick={onLoginClick}
      >
        Login
      </button>
    </div>
  );
}
