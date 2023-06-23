import Navbar from "./components/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
// import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Waifu Generator",
	description: "A website to generate random Anime Waifu, Wallpapers and more",
	keywords: [
		"waifu",
		"generator",
		"random waifu",
		"waifu generator",
		"random generator",
		"random waifu generator",
		"nsfw generator",
		"nsfw waifu",
		"waifu gifs"
	]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
