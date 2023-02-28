import React from "react";
import { bookings } from "./constants";
import Table from "./Scheduler/Table";
import Table1 from "./Scheduler/Table1";
import SingleUser from "./SingleUser";
import Today from "./Today";
import './App.css'
import Abc from "./Abc";
import Table2 from "./Scheduler/Table2";
const App = () => {
  return (
    <>
      <div className="abc my-5">
        <div>
          <Table1 />
        </div>
        {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
          {bookings.map((item, index) => {
            return <SingleUser {...item} key={index} />;
          })}
        </div> */}
       <div>
       {/* <Table2/> */}
       </div>
      </div>
      <Today/>
    {/* <Abc/> */}
      {/* <Table1/> */}
      {/* <Table/> */}
    </>
  );
};

export default App;