import { useState } from "react";

export default function UsingState() {
    const [count, setCount] = useState<number>(0);
    const clickHandler = () => setCount((count) => count + 1);

    return(
        <>
            <h1>숫자 : {count}</h1>
            <button onClick = {clickHandler}>증가</button>
        </>
    );
}