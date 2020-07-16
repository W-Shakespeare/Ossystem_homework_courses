import React, { useState } from "react";
import Comment from "./Comment";
function CommentsList() {
  const [allComment, setAllComment] = useState([
    {
      id: Date.now(),
      dateCreate: new Date().toLocaleString(),
      like: 0,
      dislike: 0,
      text: `Судьба шепчет воину, что приближается буря, воин шепчет в ответ: "Я и есть буря..."`,
    },
    {
      id: Date.now() + 1,
      dateCreate: new Date().toLocaleString(),
      like: 0,
      dislike: 0,
      text: `Руки работают видят глаза, пархай как бабочка жаль как пчела "Мухамед Али"`,
    },
  ]);

  return (
    <div>
      <Comment />
    </div>
  );
}

export default CommentsList;
