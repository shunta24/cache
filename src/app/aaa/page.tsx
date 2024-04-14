export default async function Home() {
  const aa = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo")
    .then((a) => a.json())
    .catch((a) => a.json());

  await new Promise((resolve) => setTimeout(resolve, 3000));

  const bb = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo")
    .then((a) => a.json())
    .catch((a) => a.json());

  return (
    <main className="">
      <p>現在時刻：{new Date().toLocaleString()}</p>
      <p>{aa.datetime}</p>
      <p>{bb.datetime}</p>
    </main>
  );
}
