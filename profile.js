import { useParams } from "react-router-dom";

export default function Profile() {
  
  const a = useParams();
  console.log(a)
  
  return (
    <>


      <h1>profile page{a.id }</h1>
    </>
  );
}
