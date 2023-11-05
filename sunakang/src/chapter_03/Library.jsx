import React from "react";
import Book from "./Book";

function Library(props) {
  return (
    <div>
      <Book name="처음 만난 파이썬" numOfPage={300} />
      <Book name="처음 만난 알고리즘" numOfPage={10} />
      <Book name="처음 만난 리액트" numOfPage={200} />
    </div>
  );
}

export default Library;
