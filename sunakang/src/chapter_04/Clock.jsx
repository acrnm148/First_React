import React from "react";

function Clock(props) {
  return (
    <div>
      <h1>안녕, 리액트!</h1>
      <h2>현재시간은 {new Date().toLocaleTimeString()} 이야.</h2>
    </div>
  );
}

export default Clock;
