import React, { useState } from 'react'
import { useEffect } from 'react'

const Count = (props) => {
let [arr,setArr]=useState(["","","","","",""])
useEffect(() => {
    arr=["","","","","",""];
    arr[props.n]="green";
    setArr([...arr]);
    console.log(arr)
}, []); 
  return (
    <><div id={arr[0]}>1</div><div id={arr[1]}>2</div><div id={arr[2]}>3</div><div id={arr[3]}>4</div><div id={arr[4]}>5</div><div id={arr[5]}>6</div></>
  )
}

export default Count