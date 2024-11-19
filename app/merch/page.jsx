import React from "react";
import merchcss from "./merch.module.css";
import Image from "next/image";
import tshirt from "/public/testproduct.webp";
import epochhoodie from "/public/epochhoddie.webp";
import epochbeenie from "/public/epochbeenie.webp";
import epochlaptopbag from "/public/epochlaptopbag.webp";


export default function merch() {
  return (
    <main className={merchcss.main}>
      <div className={merchcss.container}>
        <div className={merchcss.box}>
          <Image className={merchcss.image} src={epochhoodie} alt="merch samples" />
          <button className={merchcss.btn}>Add to cart</button> $40
        </div>
        <div className={merchcss.box}>
          <Image className={merchcss.image} src={epochbeenie} alt="merch samples"/>
          <button className={merchcss.btn}>Add to cart</button> $25
        </div>
        <div className={merchcss.box}>
          <Image className={merchcss.image} src={epochlaptopbag} alt="merch samples"/>
          <button className={merchcss.btn}>Add to cart</button> $75
        </div>
        <div className={merchcss.box}>
          <Image className={merchcss.image} src={tshirt} alt="merch samples"/>
          <button className={merchcss.btn}>Add to cart</button> $60
        </div>
        <div className={merchcss.box}>
          <Image className={merchcss.image} src={tshirt} alt="merch samples"/>
          <button className={merchcss.btn}>Add to cart</button> $10
        </div>
      </div>
    </main>
  );
}
