import React from "react";
import { convertTimeToDecimal } from "./eventData"; 
// import { convertTimeToDecimal } from "./constants";
import './singleuser.css'

const startTime = 9;
const endTime = 18;

const minHeight = 90;
const SingleUser = (props) => {
  const { name, eventStartTime, eventEndTime } = props;
  const modifiedEventStartTime = convertTimeToDecimal(eventStartTime);
  const modifiedEventEndTime = convertTimeToDecimal(eventEndTime);
  console.log("event", { modifiedEventStartTime, modifiedEventEndTime, minHeight }, (modifiedEventEndTime - modifiedEventStartTime) * minHeight);

  return (
    <>
    
    
      <div
        style={{
          borderStyle: "solid",
          borderLeftColor: "blue",
          width: "100%",
          height: (modifiedEventEndTime - modifiedEventStartTime) * minHeight,
          borderWidth: 0,
          borderLeftWidth: 3,
          position: "absolute",
          left: 0,
          background: "#D4E6F1",
          top: (modifiedEventStartTime - startTime) * minHeight,
        }}
      >
     </div>
    </>
  );
};

export default SingleUser;