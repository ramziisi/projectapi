
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data,setData]=useState([]);
  useEffect(() => {
    const fetchDAta=async()=>{
      const res=await axios.get('https://jsonplaceholder.typicode.com/users')
      setData(res.data)
    }
   
  fetchDAta()}, [])
  return (
    <div className="App">
   {data.map(el=><h4>{el.email}</h4>)}
    </div>
  );
}

export default App;
