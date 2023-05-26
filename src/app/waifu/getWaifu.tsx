"use server";

export interface WaifuProps {
  type: string;
  category: string;
}

export default async function getWaifu({ type, category }: WaifuProps) {
  console.log(type, category);
  const res = await fetch(`https://api.waifu.pics/${type}/${category}`, {
    cache: "no-store",
  });
  const responseData = await res.json(); // Await the completion of the response parsing

  console.log(`Response:`, responseData);
  return responseData;
}
