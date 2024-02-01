import { useEffect, useState } from "react";
import "./App.css";
import { DataDisplay } from "./components/DataDisplay";

function App() {
const [data, setData] = useState([]);
const [loding, setLoding] = useState(false);


async function fetchData() {
   setLoding(true);

  try {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    let data1 = await res.json();
    setData(data1);
  } catch (error) {
    console.log(error)
  } 
  finally {
    setLoding(false);
  }
}


 return(
    <>
      <DataDisplay />
      <h1>React Data Fetching</h1>
      <button onClick={fetchData} disabled={loding}>
        {loding ? 'Loading...' : 'Fetch Data'}
      </button>
        <p>Loading...</p>
     (
        <DataDisplay data={data} />
      )
    </>
  )
}

export default App;