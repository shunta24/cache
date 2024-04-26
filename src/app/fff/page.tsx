"use client";

import { useState } from "react";

export default function Home() {
  const [cc, ccc] = useState({ s: "", k: "" });

  const v = async () => {
    const aa = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo")
      .then((a) => a.json())
      .catch((a) => a.json());

    await new Promise((resolve) => setTimeout(resolve, 3000));

    const mm = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo")
      .then((a) => a.json())
      .catch((a) => a.json());

    ccc({ s: aa.datetime, k: mm.datetime });
  };

  return (
    <main className="">
      <p>現在時刻：{new Date().toLocaleString()}</p>
      <p>{cc.s}</p>
      <p>{cc.k}</p>
      <button onClick={v}>更新</button>
    </main>
  );
}
