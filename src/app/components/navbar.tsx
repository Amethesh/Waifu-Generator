import Link from "next/link";
import style from "./navbar.module.css";
import Image from "next/image";
import logo from "../../assets/pngaaa.com-2555020.png";

export default function Navbar() {
  return (
    <div className={style.container}>
      <nav className={style.navbar}>
        <Image src={logo} alt="Logo" width={200} height={50} />
        <Link href="/">Home</Link>
        <Link href="/waifu">Waifu Generator</Link>
        <Link href="/about">About</Link>
      </nav>
    </div>
  );
}
