"use server";

export interface WaifuProps {
	type: string;
	category: string;
}

export default async function getWaifu({ type, category }: WaifuProps) {
	console.log(type, category);

	const timeoutPromise = new Promise((_, reject) => {
		setTimeout(() => {
			reject(new Error("API request timed out."));
		}, 8000); // Timeout after 8 seconds (8000 milliseconds)
	});

	const fetchPromise = fetch(`https://api.waifu.pics/${type}/${category}`, {
		cache: "no-store"
	}).then((res) => res.json());

	try {
		const responseData = await Promise.race([timeoutPromise, fetchPromise]);
		console.log(`Response:`, responseData);
		return responseData;
	} catch (error) {
		console.error(error);
		throw error;
	}
}
