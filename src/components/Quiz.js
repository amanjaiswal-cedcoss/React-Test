import React, { useState } from "react";
import Count from "../Count";
import Groups from "./Groups";
import Question from "./Question";

const arrQuestions = [
  {
    id: 1,
    question: "Who wrote Julius Caesar, Macbeth and Hamlet?",
    optionA: "Wole Soyinka",
    optionB: "William Shakespeare",
    optionC: "Ngozi Chimamanda Adichie",
    optionD: "Dan Brown",
    answer: "William Shakespeare",
  },

  {
    id: 2,
    question: "What did the crocodile swallow in Peter Pan?",
    optionA: "A Book",
    optionB: "A Computer",
    optionC: "A pair of shoes",
    optionD: "Alarm Clock",
    answer: "Alarm Clock",
  },

  {
    id: 3,
    question: "Which is the only mammal that can’t jump?",
    optionA: "Dog",
    optionB: "Elephant",
    optionC: "Goat",
    optionD: "Lion",
    answer: "Elephant",
  },

  {
    id: 4,
    question: "Who lived at 221B, Baker Street, London?",
    optionA: "Tony Stark",
    optionB: "Morgan Freeman",
    optionC: "Sherlock Holmes",
    optionD: "Samuel L. Jackson",
    answer: "Sherlock Holmes",
  },

  {
    id: 5,
    question: "What colour is a panda?",
    optionA: "Green and Yellow",
    optionB: "Blue and Red",
    optionC: "Green and White",
    optionD: "Black and White",
    answer: "Black and White",
  },

  {
    id: 6,
    question: "Where is the smallest bone in the human body?",
    optionA: "The Chest",
    optionB: "The Ear",
    optionC: "The Legs",
    optionD: "The Hands",
    answer: "The Ear",
  },
];

const Quiz = () => {
  const [n, setN] = useState(0);
  const [score, setScore] = useState(0);
  const [stats,setStats] = useState({
    notVisited: 0,
    notAnswered: 0,
    answered: 0,
    markedReview: 0,
    answeredMarked: 0,
  });

  const Next = (e) => {
    console.log(e.target.innerText);
    let txt = e.target.innerText;
  
    if (n < 5) {
      if (txt == "SAVE & NEXT") {
    setN((prevState) => { return prevState + 1; });
      }
      else if(txt == "CLEAR RESPONSE"){
        document.getElementById("options").reset();
      }
      else if(txt=="MARK FOR REVIEW"){
        stats.markedReview+=1;
      }
      else if(txt=="SAVE & MARK FOR REVIEW & NEXT"){
        stats.markedReview+=1;
        setN((prevState) => { return prevState + 1; });
      }
      else if(txt="SUBMIT & CLOSE"){
        if(score>=3){
        alert("You scored "+{score}+". You are qualified")
        }
        else{
            alert("You scored "+{score}+". You are not qualified")
        }
      }
      let id = document.querySelectorAll('#options input[name="props.Next"]:checked' );
      let answer = id[0].value;
      if (answer === arrQuestions[n].answer) {
          score += 1;
        }
    } else if (n == 5) {
      setN(0)
    }
  };

  return (
    <>
      <div id="head">
        <h3>Quiz</h3>
      </div>
      <div id="body">
        <div id="question">
          <Question question={arrQuestions[n]} Next={Next} />
        </div>
        <div id="stats">
          <div id="groups">
            <Groups />
          </div>
          <div id="count">
            <Count n={n} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
