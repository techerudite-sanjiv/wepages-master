import React from "react";
import { convertTimeToDecimal } from "./eventData"; 

const startTime = 9;
const endTime = 18;

const userStartTime = 12;
const userEndTime = 16;

const minHeight = 60;
const SingleUser = (props) => {
  const { name, eventEndTime, eventStartTime } = props;
  const modifiedEventEndTime = convertTimeToDecimal(eventEndTime);
  const modifiedEventStartTime = convertTimeToDecimal(eventStartTime);
  console.log(
    "eeee",
    { modifiedEventEndTime, modifiedEventStartTime, minHeight },
    (modifiedEventEndTime - modifiedEventStartTime) * minHeight
  );
  return (
    <div
      style={{
        borderStyle: "solid",
        borderLeftColor: "green",
        height: (endTime - startTime) * minHeight,
        width: "100%",
        borderWidth: 0,
        borderLeftWidth: 10,
        position: "relative",
      }}
    >
      <div
        style={{
          borderStyle: "solid",
          borderLeftColor: "red",
          width: "100%",
          height: (modifiedEventEndTime - modifiedEventStartTime) * minHeight,
          borderWidth: 0,
          borderLeftWidth: 10,
          position: "absolute",
          background:"aqua",
          left: 5,
          top: (modifiedEventStartTime - startTime) * minHeight,
        }}
      ></div>
    </div>
  );
};

export default SingleUser;