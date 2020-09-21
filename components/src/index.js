import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className={"ui container comments"}>
      <ApprovalCard>
        <h4>Warning!</h4>
        <div>Are you sure?</div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={"Ricardo"}
          timeAgo={"Today at 6:00AM"}
          content={"Hello there!"}
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={"Sam"}
          timeAgo={"Today at 5:32PM"}
          content={"General Kenobi."}
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={"Gandalf"}
          timeAgo={"Yesterday at 10:32PM"}
          content={"Nice Blog Post!"}
          image={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
