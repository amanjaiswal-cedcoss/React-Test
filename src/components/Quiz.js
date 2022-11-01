import React, { useState } from "react";
import Count from "./Count";
import Groups from "./Groups";
import Question from "./Question";
import Countdown from "./Countdown";

const arrQuestions = [
  {
    id: 1,
    question: "Who wrote Julius Caesar, Macbeth and Hamlet?",
    optionA: "Wole Soyinka",
    optionB: "William Shakespeare",
    optionC: "Ngozi Chimamanda Adichie",
    optionD: "Dan Brown",
    answer: "William Shakespeare",
    answerIndex: 2,
  },

  {
    id: 2,
    question: "What did the crocodile swallow in Peter Pan?",
    optionA: "A Book",
    optionB: "A Computer",
    optionC: "A pair of shoes",
    optionD: "Alarm Clock",
    answer: "Alarm Clock",
    answerIndex: 4,
  },

  {
    id: 3,
    question: "Which is the only mammal that can’t jump?",
    optionA: "Dog",
    optionB: "Elephant",
    optionC: "Goat",
    optionD: "Lion",
    answer: "Elephant",
    answerIndex: 2,
  },

  {
    id: 4,
    question: "Who lived at 221B, Baker Street, London?",
    optionA: "Tony Stark",
    optionB: "Morgan Freeman",
    optionC: "Sherlock Holmes",
    optionD: "Samuel L. Jackson",
    answer: "Sherlock Holmes",
    answerIndex: 3,
  },

  {
    id: 5,
    question: "What colour is a panda?",
    optionA: "Green and Yellow",
    optionB: "Blue and Red",
    optionC: "Green and White",
    optionD: "Black and White",
    answer: "Black and White",
    answerIndex: 4,
  },

  {
    id: 6,
    question: "Where is the smallest bone in the human body?",
    optionA: "The Chest",
    optionB: "The Ear",
    optionC: "The Legs",
    optionD: "The Hands",
    answer: "The Ear",
    answerIndex: 2,
  },
];

const Quiz = () => {
  let [n, setN] = useState(0);
  let [selected, setSelected] = useState([
    [false, [false, false, false, false]],
    [false, [false, false, false, false]],
    [false, [false, false, false, false]],
    [false, [false, false, false, false]],
    [false, [false, false, false, false]],
    [false, [false, false, false, false]],
  ]);
  let [score, setScore] = useState(0);
  let [stats, setStats] = useState({
    notVisited: 5,
    notAnswered: 6,
    answered: 0,
    markedReview: 0,
    answeredMarked: 0,
  });
  let [time, setTime] = useState({ hour: 1, minute: 0, second: 0 });

  const Next = (e) => {
    console.log(e.target.innerText);
    let txt = e.target.innerText;
    console.log("n=",n)
    console.log("selected[n][0]="+selected[n][0],)
    if (n < 5) {
      if(stats.notVisited>0){
      stats.notVisited--;}
        if (txt == "SAVE & NEXT") {
          setN((prevState) => {
            return prevState + 1;
          });
        } else if (txt == "CLEAR RESPONSE") {
          document.getElementById("options").reset();
        } else if (txt == "MARK FOR REVIEW") {
          if (selected[n][0] === true) {
          stats.markedReview ++;
          }
        } else if (txt == "SAVE & MARK FOR REVIEW & NEXT") {
          if (selected[n][0] === true) {
            stats.markedReview ++;
            }
          setN((prevState) => {
            return prevState + 1;
          });
        } else if ((txt = "SUBMIT & CLOSE")) {
          if (score >= 3) {
            alert("You scored " + score + ". You are qualified");
          } else {
            alert("You scored " + score + ". You are not qualified");
          }
        }
        if (selected[n][0] === true) {
        stats.answered++;
        stats.notAnswered--;
      }
    }
    console.log(stats);
    setStats({ ...stats });
    setScore(score);
  };

  const selectOption = (e) => {
    let ind = e.target.getAttribute("ind");
    let selOption = e.target.getAttribute("indoption");
    console.log("selected Option =" + selOption);
    for (let i = 0; i < selected.length; i++) {
      if (i === ind - 1) {
        selected[i][0] = true;
        selected[i][1] = [false, false, false, false];
        selected[i][1][selOption] = true;
      }
    }
    console.log(selected);
    setSelected([...selected]);
  };

  if (time.hour > 0 || time.minute > 0 || time.second > 0) {
    return (
      <>
        <Countdown time={time} setTime={setTime} />
        <div id="head">
          <h3>Quiz</h3>
        </div>
        <div id="body">
          <div id="question">
            <Question
              question={arrQuestions[n]}
              n={n}
              Next={Next}
              selectOption={selectOption}
              selected={selected}
            />
          </div>
          <div id="stats">
              <Groups stats={stats} />
            <div id="count">
              <Count n={n} setN={setN} />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    console.log("The time limit for test is exceded.");
    return (
      <>
        <div>The time limit for test is exceded.</div>
      </>
    );
  }
};

export default Quiz;
