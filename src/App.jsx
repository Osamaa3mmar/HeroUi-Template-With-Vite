import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { setTitle } from "./utils/SEOTools";


function App() {

  useEffect(()=>{
    setTitle("osama");
  },[])



  return (
    <Routes>
      <Route element={"test"} path="/" />
      
    </Routes>
  );
}

export default App;
