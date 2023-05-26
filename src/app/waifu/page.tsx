import Image from "next/image";

const getWaifuImage = async () => {
  const res = await fetch("https://api.waifu.pics/sfw/waifu", {
    cache: "no-store",
  });
  return res.json();
};

export default async function waifuGenerator() {
  let waifu;
  const generateWaifu = async () => {
    "use server";
    waifu = await getWaifuImage();
  };

  return (
    <section>
      <h1>This is waifu generator!</h1>
      <button onClick={generateWaifu}>Generate</button>
      <div>
        <Image
          src={waifu.url}
          alt="Random waifu image"
          width={300}
          height={500}
        />
      </div>
    </section>
  );
}
