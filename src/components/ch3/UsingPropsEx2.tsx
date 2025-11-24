interface ScObj {
    name: string;
    age: number;
    clickHandler: () => void;
};




export default function UsingPropsEx2 (props : ScObj) 
{
    
    const { name, age, clickHandler, } = props;
    
    return(
        <>
            <h2>이름: {name}</h2>
            <h2>나이: {age}</h2>
            <button onClick = {clickHandler}>클릭</button>
        </>
    );
}