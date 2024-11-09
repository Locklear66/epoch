'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import background from "../public/background2.webp";
import discord from "../public/discord.png";
import dragonslayer from "../public/dragonslayer.png";
import openingTutorial from "../public/openingTutorial.png";
import discord2 from "../public/discord2.png";

import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '@/app/Firebase/config'
import { useRouter } from 'next/navigation'
import { signOut } from 'firebase/auth'

export default function Home() {

  const [user] = useAuthState(auth);
  const router = useRouter();
  const userSession = sessionStorage.getItem('user')

  console.log({user})

  if (!user && !userSession){
    router.push('/sign-up')
  }

  return (
    <main className={styles.main}>
      <Image className={styles.img} src={background} alt={background}></Image>
      <div className={styles.header}>
        <h1 className={styles.title}>
          Welcome to the Epoch of Genesis a Sandbox MMO set during the Pre-Flood
          Genesis.
        </h1>
        <h2 className={styles.subtitle}>
          Choose your side in the War between{" "}
          <span className={styles.good}>Good</span> and{" "}
          <span className={styles.evil}>Evil</span>!
        </h2>
      </div>
      <div className={styles.btns}></div>
      {/* CONTAINER FOR THE PICS AND BUTTONS */}
      <div className={styles.pics}>
        <div className={styles.pic__btn}>
          <Link
            href="https://epochofgenesis.com/download/EOGLauncher-prod-v1.0.exe"
            target=""
          >
            <button className={styles.play__now}>Play Now</button>
          </Link>
        </div>
        <div className={styles.pic__container}>
          <Image className={styles.img2} src={dragonslayer}></Image>
          <Image className={styles.img2} src={openingTutorial}></Image>
        </div>
        <div className={styles.pic__btn}>
          <Link href="https://discord.gg/tcEaX5hS6A" target="_blank">
            <button className={styles.join__discord}>Join Discord</button>
          </Link>
        </div>
        <div className={styles.pic__container}>
          <Image className={styles.img1} src={discord}></Image>
          <Image className={styles.img1} src={discord2}></Image>
        </div>
        <button onClick={() => {
          signOut(auth) 
          sessionStorage.removeItem('user')}}>
          Logout
        </button>
      </div>
      {/* VIDEO PLAYER */}
      <div className={styles.video__container}>
        <p className={styles.video__para}>
          Check out the latest on{" "}
          <Link
            className={styles.yt__link}
            href="https://youtube.com/@epochofgenesis-official6608?si=i-C_P9MU2U5JKG-Z"
            target="_blank"
          >
            YouTube
          </Link>
          . Our coders are hard at work making sure the game is up to date and
          fun to play.
        </p>
        <iframe
          className={styles.video}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/__9k6maDBuY?si=5tKx9RGmnLDSSXgD"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className={styles.video__container}>
        <iframe
          className={styles.video}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YVvw8GenCrY?si=ufkXpLShT3q-iIHA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </main>
  );
}
