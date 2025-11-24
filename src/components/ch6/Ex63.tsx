import { useReducer } from "react";
import { counterReducer } from "../../reducer/counterReducer";
import { userReducer } from "../../reducer/userReducer";
import { cartReducer } from "../../reducer/cartReducer";

export default function Ex63(){
    const [count, countDispatch] = useReducer(counterReducer, 0);
    const [user, userDispatch] = useReducer(userReducer, {});
    const [cart, cartDispatch] = useReducer(cartReducer, []);
    
    return(
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => countDispatch({type: "PLUS"})}>증가</button>
            <h2>User: {user.name}</h2>
            <button onClick={() => userDispatch({type: "SET_USER", payload: {name: 'alice'}})}>Set User</button>
            <h3>Cart items: {cart.length}</h3>
            <button onClick={() => cartDispatch({type: "ADD_ITEM", payload: {id: 1, name: 'Item 1'}})}>Add Item</button>
        </>
    );
}

