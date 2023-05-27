"use client";
import styles from "./page.module.css";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import getWaifu from "./getWaifu";

export default function Home() {
  const [category, setCategory] = useState<string>("waifu");
  const [type, setType] = useState<string>("sfw");
  const [waifuImage, setWaifuImage] = useState<string>(
    "https://i.waifu.pics/3DpVCc3.jpg"
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const generateWaifu = async () => {
    setIsLoading(true);
    const data = await getWaifu({ type, category });
    setWaifuImage(data.url);
    setIsLoading(false);
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
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <main className={styles.main}>This is the Home Page</main>
      <section>
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
          {isLoading ? (
            <div
              style={{
                width: "300px",
                height: "500px",
                backgroundColor: "white",
              }}
            ></div>
          ) : (
            <Image
              src={waifuImage}
              alt="Random waifu image"
              width={300}
              height={500}
            />
          )}
        </div>
      </section>
    </>
  );
}
