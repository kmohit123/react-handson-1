import React, {useState} from "react";
import FunctionCompo from "./component/FunctionCompo";
import ClassCompo from "./component/ClassCompo";
import  "./App.css";
function App() {
  const [fState, setFState] = useState(false)
  const [cState, setCState] = useState(false)
  console.log(false);
  return ( 
    <>
      <h1 className="heding">Styling useing Functional and Class Component</h1>
      <div className="buttonbox">
        <button onClick={()=>setFState(!fState)}>To See styling Functional Component</button>
        <button onClick={()=>setCState(!cState)}>To See styling Class Component</button>
      </div>
      {fState ? <FunctionCompo/>: ""}
      {cState ? <ClassCompo/>: ""}
    </>
  );
}
export default App;
