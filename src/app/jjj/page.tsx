"use client";

import { useState } from "react";

const UseApiRoute = () => {
  const [cc, ccc] = useState({ get: "", post: "" });

  const k = async () => {
    const aa = await fetch("/api/get")
      .then((a) => a.json())
      .catch((a) => a.json());

    ccc((prev) => ({ ...prev, get: aa.datetime }));
  };
  const kk = async () => {
    const aa = await fetch("/api/post", {
      method: "POST",
    })
      .then((a) => a.json())
      .catch((a) => a.json());

    ccc((prev) => ({ ...prev, post: aa.datetime }));
  };

  return (
    <div>
      <p>現在時刻：{new Date().toLocaleString()}</p>
      <p>GET通信</p>
      <p>{cc.get}</p>
      <p>POST通信</p>
      <p>{cc.post}</p>
      <button onClick={k}>ApiRouteを使ってフロントからAPIを叩く(GET)</button>
      <br />
      <button onClick={kk}>ApiRouteを使ってフロントからAPIを叩く(POST)</button>
    </div>
  );
};

export default UseApiRoute;
