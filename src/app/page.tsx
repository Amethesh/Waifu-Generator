"use client";
import styles from "./page.module.css";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import getWaifu from "./getWaifu";

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

	const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setCategory(event.target.value);
	};

	const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setType(event.target.value);
	};

	return (
		<>
			<Head>
				<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
			</Head>
			<section className={styles.container}>
				<div className={styles.leftsection}>
					<main className={styles.text}>Select type or style of the image you need to generate</main>
					<form className={styles.form}>
						<select value={category} onChange={handleCategoryChange}>
							<option>waifu</option>
							<option>neko</option>
							<option>shinobu</option>
							<option>happy</option>
						</select>

						<select value={type} onChange={handleTypeChange}>
							<option>sfw</option>
							<option>nsfw</option>
						</select>
					</form>
					<button onClick={generateWaifu}>Generate</button>
				</div>
				<div className={styles.rightsection}>
					{isLoading ? (
						<span className={styles.loading}>Loading</span>
					) : (
						<img src={waifuImage} alt="Random waifu image" />
					)}
					<div className={styles.buttons}>
						<button>Download</button>
						<button>Copy Link</button>
					</div>
				</div>
			</section>
		</>
	);
}
