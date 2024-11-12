"use client";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/Firebase/config";
import { useRouter } from "next/navigation";

import signincss from "./signin.module.css";
import Link from "next/link";

export default function signIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log({ res });
      // sessionStorage.setItem('user', true)
      setEmail("");
      setPassword("");
      router.push("/");
    } catch (e) {
      console.error(e);
    }
  };

  const isButtonDisabled = !email || !password;

  return (
    <main className={signincss.main}>
      <div className={signincss.wrapper}>
        <div className={signincss.btn__wrapper}>
          <input
            className={signincss.btn}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            autoComplete="off"
            name="text"            
            placeholder="Email"
          ></input>
          <input
            className={signincss.btn}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            autoComplete="off"
            name="text"
            placeholder="Password"
          ></input>
          <button className={signincss.btn__login} 
          onClick={handleSignIn}
          disabled={isButtonDisabled}>
            Login
          </button>
          <div className={signincss.link__box}>
            <li className={signincss.list}>
              <Link className={signincss.links} href="/sign-in">
                Don't have an account? Sign up
              </Link>
            </li>
          </div>
        </div>
      </div>
    </main>
  );
}
