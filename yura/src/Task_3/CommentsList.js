import React, { useState } from "react";
import Comment from "./Comment";
function CommentsList() {
  const [textarea, setTextarea] = useState("");
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

  const onTextareaChange = (e) => {
    setTextarea(e.target.value);
  };

  const addComment = (e) => {
    e.preventDefault();
    let newComment = {
      id: Date.now(),
      dateCreate: new Date().toLocaleString(),
      like: 0,
      dislike: 0,
      text: textarea,
    };
    setAllComment(() => [newComment, ...allComment]);
  };

  const deleteComment = (id) => {
    let newAllComment = allComment.filter((objComment) => objComment.id !== id);
    setAllComment(newAllComment);
  };

  const editedText = (id, text, dateCreate) => {
    setAllComment(() => {
      return allComment.map((objComment) => {
        if (objComment.id === id) {
          return { ...objComment, text, dateCreate };
        } else {
          return { ...objComment };
        }
      });
    });
  };

  return (
    <div className="wrapper">
      <div className="wrapper-comment">
        {allComment.map((commentObj) => {
          return (
            <Comment
              key={commentObj.id}
              id={commentObj.id}
              text={commentObj.text}
              dateCreate={commentObj.dateCreate}
              like={commentObj.like}
              dislike={commentObj.dislike}
              deleteComment={deleteComment}
              editedText={editedText}
            />
          );
        })}
      </div>
      <div className="other">
        <form onSubmit={addComment}>
          <textarea
            name="textarea"
            onChange={onTextareaChange}
            value={textarea}
            required={true}
          ></textarea>
          <button className="btn">Добавить коментарий</button>
        </form>
      </div>
    </div>
  );
}

export default CommentsList;
