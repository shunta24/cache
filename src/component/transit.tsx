"use client";

import { useRouter } from "next/navigation";

const Transit = () => {
  const router = useRouter();

  const g = () => {
    router.push("/fff");
  };
  const gg = () => {
    router.push("/jjj");
  };

  return (
    <div>
      <button onClick={g}>クライアントコンポーネントに移動</button>
      <br />
      <button onClick={gg}>
        クライアントコンポーネント(ApiRoute使用)に移動
      </button>
    </div>
  );
};

export default Transit;
