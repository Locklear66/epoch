import React from "react";
import footercss from "./footer.module.css";
import Link from "next/link";

export default function footer() {
  return (
    <div className={footercss.footer__container}>
      <Link className={footercss.link} href="/">
        Home
      </Link>
      <Link
        className={footercss.link}
        href="https://epochofgenesis.com/download/EOGLauncher-prod-v1.0.exe"
      >
        Download
      </Link>
      <Link className={footercss.link} href="https://discord.gg/tcEaX5hS6A">
        Discord
      </Link>
      <p className={footercss.copyright}>Copyright © 2023 Epoch of Genesis</p>
    </div>
  );
}
