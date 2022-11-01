import React, { useEffect } from "react";

let intervalCountdown;
const Countdown = (props) => {
  useEffect(() => {
    clearInterval(intervalCountdown);
    intervalCountdown = setInterval(startCountDown, 1000);
  }, []);

  const startCountDown = () => {
    if (
      props.time.hour === 0 &&
      props.time.minute === 0 &&
      props.time.second === 0
    ) {
      clearInterval(intervalCountdown);
    } else {
      if (props.time.second >= 1) {
        props.time.second--;
      } else {
        props.time.second = 59;
        if (props.time.minute >= 1) {
          props.time.minute--;
        } else {
          props.time.minute = 59;
          if (props.time.hour > 1) {
            props.time.hour--;
          } else {
            props.time.hour = 0;
          }
        }
      }
    }
    props.setTime({ ...props.time });
  };

  return (
    <div id="divTimer">
      <p>
        {props.time.hour}:{props.time.minute}:{props.time.second}
      </p>
    </div>
  );
};

export default Countdown;
