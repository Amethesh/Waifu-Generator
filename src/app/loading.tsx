"use client";

export default function loading() {
	return (
		<section>
			<h1>This is waifu generator!</h1>
			<form>
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
			<div
				style={{
					width: "300px",
					height: "500px",
					backgroundColor: "white"
				}}
			></div>
		</section>
	);
}
