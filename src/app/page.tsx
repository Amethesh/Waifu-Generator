"use client";
import styles from "./page.module.css";
import Head from "next/head";
// import Image from "next/image";
import { useState, useRef } from "react";
import getWaifu from "./getWaifu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faLink } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
	const [category, setCategory] = useState<string>("waifu");
	const [type, setType] = useState<string>("sfw");
	const [waifuImage, setWaifuImage] = useState<string>("https://i.waifu.pics/3DpVCc3.jpg");
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const imgRef = useRef(null);

	//!Setting the image source to transparent base64 encoded GIF
	function cancelImageLoading(imgElement: HTMLImageElement | null) {
		if (imgElement) {
			console.log("Canceled");
			imgElement.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEAAAAALAAAAAABAAEAAAI=";
		}
	}

	const generateWaifu = async () => {
		setIsLoading(true);
		cancelImageLoading(imgRef.current);

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
					<div id="toggle">
						<input
							id="toggle-input"
							type="checkbox"
							checked={type === "nsfw"}
							onChange={() => setType(type === "nsfw" ? "sfw" : "nsfw")}
						/>
						<label htmlFor="toggle-input" id="toggle-lable"></label>
						<h2>NSFW</h2>
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
							<div>
								<input
									type="checkbox"
									id="smile"
									checked={category.includes("smile")}
									onChange={() => handleCategoryChange("smile")}
								/>
								<label htmlFor="smile">Smile</label>
							</div>
							<div>
								<input
									type="checkbox"
									id="highfive"
									checked={category.includes("highfive")}
									onChange={() => handleCategoryChange("highfive")}
								/>
								<label htmlFor="highfive">Highfive</label>
							</div>
							<div>
								<input
									type="checkbox"
									id="happy"
									checked={category.includes("happy")}
									onChange={() => handleCategoryChange("happy")}
								/>
								<label htmlFor="happy">Happy</label>
							</div>
							<div>
								<input
									type="checkbox"
									id="dance"
									checked={category.includes("dance")}
									onChange={() => handleCategoryChange("dance")}
								/>
								<label htmlFor="dance">Dance</label>
							</div>
							<div>
								<input
									type="checkbox"
									id="wink"
									checked={category.includes("wink")}
									onChange={() => handleCategoryChange("wink")}
								/>
								<label htmlFor="wink">Wink</label>
							</div>
							<div>
								<input
									type="checkbox"
									id="wave"
									checked={category.includes("wave")}
									onChange={() => handleCategoryChange("wave")}
								/>
								<label htmlFor="wave">Wave</label>
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
						<span className={styles.loading}></span>
					) : (
						<img ref={imgRef} id="downImg" src={waifuImage || ""} alt="Random waifu image" />
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
