import Image from "next/image";
import logo from "/public/logo.png";
import NavCss from "./nav.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={NavCss.nav__bar}>
      <ul className={NavCss.list__wrapper}>
        
        <div className={NavCss.link__box}>
          <li className={NavCss.list}>
            <Link className={NavCss.links} href="/">
              Homepage
            </Link>
          </li>
        </div>

        <div className={NavCss.link__box}>
        <li className={NavCss.list}>
          <Link className={NavCss.links} href="#">
            Equipment
          </Link>
        </li>
        </div>

        <div className={NavCss.link__box}>
        <li className={NavCss.list}>
          <Link className={NavCss.links} href="#">
            Spells
          </Link>
        </li>
        </div>

        <Image className={NavCss.logo} src={logo} alt="Game Logo" />

        <div className={NavCss.link__box}>
        <li className={NavCss.list}>
          <Link className={NavCss.links} href="#">
            Skills
          </Link>
        </li>
        </div>

        <div className={NavCss.link__box}>
        <li className={NavCss.list}>
          <Link className={NavCss.links} href="/merch">
            Merch
          </Link>
        </li>
        </div>

        <div className={NavCss.link__box}>
        <li className={NavCss.list}>
          <Link className={NavCss.links} href="/sign-up">
            Account
          </Link>
        </li>
        </div>

      </ul>
    </div>
  );
}
