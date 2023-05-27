import Link from "next/link";
import style from "./navbar.module.css";
import Image from "next/image";
import logo from "../../assets/pngaaa.com-2555020.png";

export default function Navbar() {
	return (
		<div className={style.container}>
			<nav className={style.navbar}>
				<Link id="links" href="/">
					Home
				</Link>
				{/* <div className={style.imagewrapper}> */}
				<Image src={logo} alt="Logo" width={150} />
				{/* </div> */}
				<Link id="links" href="/about">
					About
				</Link>
			</nav>
		</div>
	);
}
