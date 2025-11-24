import { useState } from "react";

interface Form {
    name: string;
    count: number;
    gender: string;
}

export default function UsingState() {
    const [formState, setFormState] = useState<Form>(
        { 
            name: '',
            count: 0,
            gender: '',
        }
    );

    const clickHandler = () => {
        setFormState(prev => ({
            ...prev,              // 기존 값은 유지
            name: '홍길동',           
            count: prev.count + 1 // count만 증가
        }));
    };

    return(
        <>
           <div>
                <h1>숫자 : {formState.count}</h1>
                <div>제출자 : {formState.name}</div>
                <button onClick = {clickHandler}>증가</button>
           </div>
        </>
    );
}