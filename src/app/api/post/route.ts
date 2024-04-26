export async function POST(request: Request) {
  const res = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo")
    .then((a) => a.json())
    .catch((a) => a.json());

  return Response.json(res);
}
