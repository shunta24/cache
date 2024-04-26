import Transit from "../component/transit";

export default async function Home() {
  const { signal } = new AbortController();
  const aa = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo")
    // const aa = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo",{signal})
    .then((a) => a.json())
    .catch((a) => a.json());

  await new Promise((resolve) => setTimeout(resolve, 3000));

  const bb = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo")
    .then((a) => a.json())
    .catch((a) => a.json());

  return (
    <main className="">
      <h1>サーバーコンポーネント</h1>
      <p>現在時刻：{new Date().toString()}</p>

      <p>{aa.datetime}</p>
      <p>{bb.datetime}</p>
      <br />
      <br />
      <Transit />
    </main>
  );
}
