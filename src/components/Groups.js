import React from "react";

const Groups = (props) => {
  return (
    <div id="groups">
      <div>
        <div className="groupDivs green">{props.stats.answered}</div>      <div className="groupDivsText">Answered                      </div> </div><div>
        <div className="groupDivs red">{props.stats.notAnswered} </div>    <div className="groupDivsText">Not Answered                  </div> </div><div>
        <div className="groupDivs grey">{props.stats.notVisited} </div>    <div className="groupDivsText">Not Visited                   </div> </div><div>
        <div className="groupDivs yellow">{props.stats.markedReview} </div><div className="groupDivsText">Marked For Review             </div> </div><div id="markedAnsweredDiv">
        <div className="groupDivs blue">{props.stats.answeredMarked}</div> <div className="groupDivsText">Answered And Marked For Review</div>
      </div>
    </div>
  );
};

export default Groups;
