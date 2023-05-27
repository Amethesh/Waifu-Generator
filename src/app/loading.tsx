"use client";
import styles from "./page.module.css";

export default function loading() {
	return (
		<section className={styles.container}>
			<div className={styles.leftsection}>
				<main className={styles.text}>Select type or style of the image you need to generate</main>
				<form className={styles.form}>
					<select>
						<option>waifu</option>
						<option>neko</option>
						<option>shinobu</option>
						<option>happy</option>
					</select>

					<select>
						<option>sfw</option>
						<option>nsfw</option>
					</select>
				</form>
				<button>Generate</button>
			</div>
			<div className={styles.rightsection}>
				<span className={styles.loading}>BRUH..</span>
				<div className={styles.buttons}>
					<button>Download</button>
					<button>Copy Link</button>
				</div>
			</div>
		</section>
	);
}
