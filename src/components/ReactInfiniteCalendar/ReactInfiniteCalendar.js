import React from "react";
import InfiniteCalendar from "react-infinite-calendar";
import "react-infinite-calendar/styles.css";

const today = new Date();
const lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7
);

export default function ReactInfiniteCalendar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10px"
      }}
    >
      <InfiniteCalendar
        width={400}
        height={600}
        selected={today}
        disabledDays={[0, 6]}
        minDate={lastWeek}
      />
    </div>
  );
}
