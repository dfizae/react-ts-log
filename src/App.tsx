import CountDisplay from "./components/ch6/CountDisplay"
import CountButtons from "./components/ch6/CountButtons"
import { useState } from "react";

  export default function App() {

    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
      <>
        <CountDisplay count = {count}/>
        <CountButtons increment={increment} decrement={decrement} reset={reset} />
      </>
    );
  }