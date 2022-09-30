import React from 'react'
import { useState } from 'react'

const Question = (props) => {
    // const props.Next =(e)=>{
    //     let id=document.querySelectorAll('#options input[name="props.Next"]:checked');
    //     props.Next=id[0].value
    // }
  return (
    <><h3 id="questionNum">Question {props.question.id}</h3>
    <hr/>
    <p>{props.question.question}</p>
    <form id="options">
    <input name="props.Next" value={props.question.optionA} type="radio"/><label>{props.question.optionA}</label>
    <input name="props.Next" value={props.question.optionB} type="radio"/><label>{props.question.optionB}</label>
    <input name="props.Next" value={props.question.optionC} type="radio"/><label>{props.question.optionC}</label>
    <input name="props.Next" value={props.question.optionD} type="radio"/><label>{props.question.optionD}</label></form>
    <div id="btns"><button onClick={props.Next} id="saveNext">SAVE & NEXT</button><button onClick={props.Next} id='clearResponse'>CLEAR RESPONSE</button><button onClick={props.Next} id='markReview'>MARK FOR REVIEW</button><button onClick={props.Next} id='saveMarkReview'>SAVE & MARK FOR REVIEW & NEXT</button><button onClick={props.Next} id="submitClose">SUBMIT & CLOSE</button></div>
    </>
  )
}

export default Question