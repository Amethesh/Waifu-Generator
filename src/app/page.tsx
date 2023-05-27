"use client";
import styles from "./page.module.css";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import getWaifu from "./getWaifu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faLink } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
	const [category, setCategory] = useState<string>("waifu");
	const [type, setType] = useState<string>("sfw");
	const [waifuImage, setWaifuImage] = useState<string>("https://i.waifu.pics/3DpVCc3.jpg");
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const generateWaifu = async () => {
		setIsLoading(true);

		try {
			const data = await getWaifu({ type, category });
			setWaifuImage(data.url);
		} catch (error) {
			console.error(error);
			// Display error message to the user
		} finally {
			setIsLoading(false);
		}
	};

	const handleCategoryChange = (value: string) => {
		setCategory(value);
	};

	const handleDownload = () => {
		// Trigger the download
		const link = document.createElement("a");
		link.href = waifuImage;
		link.download = "waifu_image.jpg";
		link.style.display = "none";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const handleCopyLink = () => {
		// Copy the image URL to the clipboard
		navigator.clipboard.writeText(waifuImage);
		alert("Image link copied to clipboard!");
	};

	return (
		<>
			<Head>
				<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
			</Head>
			<section className={styles.container}>
				<div className={styles.leftsection}>
					<main className={styles.text}>Select your Type</main>
					<div className="toggle">
						<input
							id="toggle-input"
							type="checkbox"
							checked={type === "nsfw"}
							onChange={() => setType(type === "nsfw" ? "sfw" : "nsfw")}
						/>
						<label htmlFor="toggle-input"></label>
					</div>
					{type === "sfw" && (
						<form className="check-form">
							<div>
								<input
									type="checkbox"
									id="waifu"
									checked={category.includes("waifu")}
									onChange={() => handleCategoryChange("waifu")}
								/>
								<label htmlFor="waifu">Waifu</label>
							</div>
							<div>
								<input
									type="checkbox"
									id="neko"
									checked={category.includes("neko")}
									onChange={() => handleCategoryChange("neko")}
								/>
								<label htmlFor="neko">Neko</label>
							</div>
							<div>
								<input
									type="checkbox"
									id="shinobu"
									checked={category.includes("shinobu")}
									onChange={() => handleCategoryChange("shinobu")}
								/>
								<label htmlFor="shinobu">Shinobu</label>
							</div>
							<div>
								<input
									type="checkbox"
									id="megumin"
									checked={category.includes("megumin")}
									onChange={() => handleCategoryChange("megumin")}
								/>
								<label htmlFor="megumin">Megumin</label>
							</div>
							<div>
								<input
									type="checkbox"
									id="bully"
									checked={category.includes("bully")}
									onChange={() => handleCategoryChange("bully")}
								/>
								<label htmlFor="bully">Bully</label>
							</div>
							<div>
								<input
									type="checkbox"
									id="cuddle"
									checked={category.includes("cuddle")}
									onChange={() => handleCategoryChange("cuddle")}
								/>
								<label htmlFor="cuddle">Cuddle</label>
							</div>
						</form>
					)}
					{type === "nsfw" && (
						<form className="check-form">
							<div>
								<input
									type="checkbox"
									id="waifu"
									checked={category.includes("waifu")}
									onChange={() => handleCategoryChange("waifu")}
								/>
								<label htmlFor="waifu">Waifu</label>
							</div>
							<div>
								<input
									type="checkbox"
									id="neko"
									checked={category.includes("neko")}
									onChange={() => handleCategoryChange("neko")}
								/>
								<label htmlFor="neko">Neko</label>
							</div>
							<div>
								<input
									type="checkbox"
									id="trap"
									checked={category.includes("trap")}
									onChange={() => handleCategoryChange("trap")}
								/>
								<label htmlFor="trap">Trap</label>
							</div>
						</form>
					)}
					<button className={styles.generate} onClick={generateWaifu}>
						Generate
					</button>
				</div>
				<div className={styles.rightsection}>
					{isLoading ? (
						<span className={styles.loading}>Loading</span>
					) : (
						<img id="downImg" src={waifuImage} alt="Random waifu image" />
					)}
					<div className={styles.buttons}>
						<button onClick={handleDownload}>
							<FontAwesomeIcon icon={faDownload} style={{ marginRight: "5px" }} />
							Download
						</button>
						<button onClick={handleCopyLink}>
							<FontAwesomeIcon icon={faLink} style={{ marginRight: "5px" }} />
							Copy Link
						</button>
					</div>
				</div>
			</section>
		</>
	);
}
