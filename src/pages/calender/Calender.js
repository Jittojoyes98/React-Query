import React, { useState } from "react";
import Calendar from "react-calendar";
// import "./Calender.css";

const Calender = () => {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <Calendar onChange={setDate} value={date} selectRange={true} />
      {date.length > 0 ? (
        <>
          <p>Range of values</p>
          <p>Starting is {date[0].toDateString()}</p>
          <span>Ending is {date[1].toDateString()}</span>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Calender;
