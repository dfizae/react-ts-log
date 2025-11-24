// props의 속성을 interface에 저장
interface UserProps {
  name: string; 
  age: number;
  clickHandler: () => void;
};

export default function Main(props: UserProps)
{
  // 구조 분해 할당
  const { name, age, clickHandler, } = props;

  // JSX
  return(
    <>
      <h2>이름: {name}</h2>
      <h2>나이: {age}</h2>
      <button onClick = {clickHandler}>클릭</button>
    </>
  );
}