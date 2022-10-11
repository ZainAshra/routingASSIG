import { useNavigate } from "react-router-dom";

export default function contact() {

  const move = useNavigate()
  
  let go = ()=>{
    move('/about')
  }
  return (
    <>


      <h1>Contact page</h1>
      <button onClick={()=>{
        move('/')
      }}>Goto home</button>


      <button onClick={go}>Goto about</button>
    </>
  );
}
