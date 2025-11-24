import { useReducer } from "react";
import { counterReducer } from "../../reducer/counterReducer";

export default function Ex62(){
    const [count, countDispatch] = useReducer(counterReducer, 0);

    return(
        <>
            <div>
                <h1>`총합:${count}`</h1>
                <button onClick={() => {countDispatch({type: "PLUS"})}}>+</button>
                <button onClick={() => {countDispatch({type: "MINUS"})}}>-</button>
                <button onClick={() => {countDispatch({type: "RESET"})}}>RESET</button>
            </div>  
        </>
    );
}