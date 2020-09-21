import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
  return (
    <div className={"ui container comments"}>
      <CommentDetail
        author={"Ricardo"}
        timeAgo={"Today at 6:00AM"}
        content={"Hello there!"}
        image={faker.image.avatar()}
      />
      <CommentDetail
        author={"Sam"}
        timeAgo={"Today at 5:32PM"}
        content={"General Kenobi."}
        image={faker.image.avatar()}
      />
      <CommentDetail
        author={"Gandalf"}
        timeAgo={"Yesterday at 10:32PM"}
        content={"Nice Blog Post!"}
        image={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
