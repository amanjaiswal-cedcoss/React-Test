import React, { useState } from "react";
import { useEffect } from "react";

const Count = (props) => {
  let [arr, setArr] = useState(["green", "", "", "", "", ""]);
  useEffect(() => {
    arr = ["", "", "", "", "", ""];
    arr[props.n] = "green";
    setArr([...arr]);
  },[props]);

  const changeColor=(e)=>{
    let ind=parseInt(e.target.innerText);
    props.setN(ind-1)
    arr = ["", "", "", "", "", ""];
    arr[ind-1] = "green";
    setArr([...arr]);
  }

  return (
    <>
      <div className="countDivs" onClick={changeColor} id={arr[0]}>1</div>
      <div className="countDivs" onClick={changeColor} id={arr[1]}>2</div>
      <div className="countDivs" onClick={changeColor} id={arr[2]}>3</div>
      <div className="countDivs" onClick={changeColor} id={arr[3]}>4</div>
      <div className="countDivs" onClick={changeColor} id={arr[4]}>5</div>
      <div className="countDivs" onClick={changeColor} id={arr[5]}>6</div>
    </>
  );
};

export default Count;