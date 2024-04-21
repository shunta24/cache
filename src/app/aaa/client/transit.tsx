"use client";

import { useRouter } from "next/navigation";

const Transit = () => {
  const router = useRouter();

  const g = () => {
    router.push("/fff");
  };

  return (
    <div>
      <button onClick={g}>クライアントコンポーネントに移動</button>
    </div>
  );
};

export default Transit;
