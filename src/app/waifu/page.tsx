"use client";
import Image from "next/image";
import { useState } from "react";
import getWaifu from "./getWaifu";

export default async function WaifuGenerator() {
  const [category, setCategory] = useState<string>("waifu");
  const [type, setType] = useState<string>("sfw");
  const [waifuImage, setWaifuImage] = useState<string>(
    "https://i.waifu.pics/3DpVCc3.jpg"
  );

  const generateWaifu = async () => {
    const data = await getWaifu({ type, category });
    setWaifuImage(data.url);
  };

  const handleCategoryChange = (event: any) => {
    setCategory(event.target.value);
  };

  const handleTypeChange = (event: any) => {
    setType(event.target.value);
  };

  return (
    <section>
      <h1>This is waifu generator!</h1>
      <form>
        <select>
          <option value={category} onChange={handleCategoryChange}>
            Category
          </option>
          <option value="choix-2">waifu</option>
          <option value="choix-3">neko</option>
          <option value="choix-4">shinobu</option>
          <option value="choix-5">happy</option>
        </select>

        <select value={type} onChange={handleTypeChange}>
          <option disabled>Type</option>
          <option value="choix-2">sfw</option>
          <option value="choix-3">nsfw</option>
        </select>
      </form>
      <button onClick={generateWaifu}>Generate</button>
      <div>
        <Image
          src={waifuImage}
          alt="Random waifu image"
          width={300}
          height={500}
        />
      </div>
    </section>
  );
}
