import './App.css'

import React from "react";
;
import SingleUser from "./SingleUser";
import { bookings } from './eventData';

const startTime = 9;
const endTime = 18;

const userStartTime = 12;
const userEndTime = 16;

const secHeight = 1;
const App = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {bookings.map((item, index) => {
        return <SingleUser {...item} key={index} />;
      })}
    </div>
  );
};

export default App;