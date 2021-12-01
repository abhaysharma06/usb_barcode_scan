import { useState, useEffect } from "react";
import "./App.css";
import { Display } from "./component/Display";
import { InputFeild } from "./component/InputFeild";

function App() {
  const [value, setValue] = useState(
    () => JSON.parse(localStorage.getItem("value")) || []
  );
  useEffect(() => {
    localStorage.setItem("value", JSON.stringify(value));
  }, [value]);
  console.log(value);

  return (
    <div className="App">
      <h1 className="heading">Barcode Scan</h1>
      <InputFeild codeValue={value} setValue={setValue} />
      <Display codeValue={value} />
    </div>
  );
}

export default App;
