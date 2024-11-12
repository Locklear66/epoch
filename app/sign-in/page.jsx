"use client";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/Firebase/config";
import logincss from "./login.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";

export default function account() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
 

  const handleSignUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log({ res });
      // sessionStorage.setItem('user', true)
      setEmail("");
      setPassword("");
      
    } catch (e) {
      console.error(e);
    }
  };

  const isButtonDisabled = !email || !password;

  return (
    <main className={logincss.main}>
      <div className={logincss.wrapper}>
        <div className={logincss.btn__wrapper}>
          <input
            className={logincss.btn}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            autoComplete="off"
            name="text"
            placeholder="Email"
          ></input>
          <input
            className={logincss.btn}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            autoComplete="off"
            name="text"
            placeholder="Password"
          ></input>
          <button className={logincss.btn__login} 
          onClick={handleSignUp}
          disabled={isButtonDisabled}
          >
            Sign Up
          </button>
          <div className={logincss.link__box}>
            <li className={logincss.list}>
              <Link className={logincss.links} href="/sign-up">
               Have an account? Sign in
              </Link>
            </li>
          </div>
        </div>
      </div>
    </main>
  );
}
