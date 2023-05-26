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

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCategory(event.target.value);
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
  };

  return (
    <section>
      <h1>This is waifu generator!</h1>
      <form>
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
