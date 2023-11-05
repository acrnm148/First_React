import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "수나강",
    content: "안녕하세용!",
  },
  {
    name: "강수나강",
    content: "반갑습니데잉~",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} content={comment.content} />;
      })}
    </div>
  );
}

export default CommentList;
