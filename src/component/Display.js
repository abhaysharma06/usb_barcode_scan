import React from "react";
import { InputFeild } from "./InputFeild";
export const Display = ({ codeValue }) => {
  console.log(typeof codeValue);
  return <div className="display">Barcode Value : {codeValue}</div>;
};
