"use client";
const UseApiRoute = () => {
  const k = async () => {
    const aa = await fetch("/api/get")
      .then((a) => a.json())
      .catch((a) => a.json());

    console.log(1111, aa.datetime);
  };
  const kk = async () => {
    const aa = await fetch("/api/post", {
      method: "POST",
    })
      .then((a) => a.json())
      .catch((a) => a.json());

    console.log(2222, aa.datetime);
  };

  return (
    <div>
      <button onClick={k}>ApiRouteを使ってフロントからAPIを叩く(GET)</button>
      <br />
      <button onClick={kk}>ApiRouteを使ってフロントからAPIを叩く(POST)</button>
    </div>
  );
};

export default UseApiRoute;
