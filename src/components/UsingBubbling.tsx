

export default function UsingBubbling() {
  const handleCapture = () => {
    console.log('난 표기되면 안된다.');
  };

  const handleBubble = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
    e.stopPropagation();
    console.log('버블링이 막혀야 한다.');
  };
  
  return (
   <div
    onClick = {handleCapture}
    style = {{padding: '50px', backgroundColor: '#f0f0f0'}}
   >
   Parent
   <button
    onClick = {handleBubble}
    style = {{ marginTop: '20px' }}
   >
    Click Me</button>
   </div>  
 );
}