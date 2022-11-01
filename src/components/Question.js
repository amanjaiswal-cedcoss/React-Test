import React, { useState } from 'react'

const Question = (props) => {
  
  return (
    <><h3 id="questionNum">Question {props.question.id}</h3>
    <hr id="hrQuestion"/>
    <p>{props.question.question}</p>
    <form id="options">
    <div><input onChange={props.selectOption} checked={props.selected[props.n][1][0]} ind={props.question.id} indoption="0" name="options" value={props.question.optionA} type="radio"/><label>{props.question.optionA}</label></div>
    <div><input onChange={props.selectOption} checked={props.selected[props.n][1][1]} ind={props.question.id} indoption="1" name="options" value={props.question.optionB} type="radio"/><label>{props.question.optionB}</label></div>
    <div><input onChange={props.selectOption} checked={props.selected[props.n][1][2]} ind={props.question.id} indoption="2" name="options" value={props.question.optionC} type="radio"/><label>{props.question.optionC}</label></div>
    <div><input onChange={props.selectOption} checked={props.selected[props.n][1][3]} ind={props.question.id} indoption="3" name="options" value={props.question.optionD} type="radio"/><label>{props.question.optionD}</label></div></form>
    <div id="btns"><button onClick={props.Next} id="saveNext">SAVE & NEXT</button><button onClick={props.Next} id='clearResponse'>CLEAR RESPONSE</button><button onClick={props.Next} id='markReview'>MARK FOR REVIEW</button><button onClick={props.Next} id='saveMarkReview'>SAVE & MARK FOR REVIEW & NEXT</button><button onClick={props.Next} id="submitClose">SUBMIT & CLOSE</button></div>
    </>
  )
}

export default Question