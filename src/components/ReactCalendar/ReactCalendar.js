import React, { useState } from "react";
import Calendar from "react-calendar";

export default function ReactCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px"
        }}
      >
        <Calendar onChange={onChange} value={value} />
      </div>
      <div>
        <pre>{JSON.stringify(value.toLocaleString(), null, 2)}</pre>
      </div>
    </>
  );
}
