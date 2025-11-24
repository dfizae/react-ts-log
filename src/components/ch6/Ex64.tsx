// TypeScript 5.0 이후 타입을 import할 때는 import type을 붙여준다.
import type { Dispatch, SetStateAction } from "react";

interface CountNumber{
    count: number;
    setCount: Dispatch<SetStateAction<number>>
};

export default function Ex64({
    count, setCount
}: CountNumber) {
    const clickhandler = () => setCount((prev) => prev + 1);
    return(
        <>
          <h1>총합: {count}</h1>
          <button onClick={clickhandler}>+</button>
        </>
    );
};
