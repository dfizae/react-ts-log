import { useReducer } from "react";

function Counter(count: number, action: {type: string}){
    switch (action.type) {
        case "INCREMENT": 
            return count+=1;

        case "DECREMENT": 
            return count-=1;
    
        case "RESET":
            return 0;    

        default: 
            return count;
    }
}

export default function Ex1() {
    const [count, countDispatch] = useReducer(Counter, 0);

    return(
        <>
            <div>
                <h1>현재 수치: {count}</h1>
                <button onClick={() => {countDispatch({type: "INCREMENT"})}}>+</button>
                <button onClick={() => {countDispatch({type: "DECREMENT"})}}>-</button>
                <button onClick={() => {countDispatch({type: "RESET"})}}>Reset</button>
            </div>
        </>
    );
};
