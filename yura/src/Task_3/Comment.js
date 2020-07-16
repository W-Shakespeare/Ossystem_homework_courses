import React, { useState } from "react";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
function Comment({
  id,
  text,
  dateCreate,
  like,
  dislike,
  deleteComment,
  editedText,
}) {
  const [isEdit, setEdit] = useState(false);
  const [textarea, setTextarea] = useState(text);

  const deleteSelectedComment = () => {
    deleteComment(id);
  };

  const editSelectedComment = () => {
    setEdit(true);
  };

  const saveEditedSelectedComment = () => {
    let time = new Date().toLocaleString();
    editedText(id, textarea, time);
    setEdit(false);
  };

  const onChangeTextarea = (e) => {
    setTextarea(e.target.value);
  };

  return (
    <div className="comment">
      <div className="card text-white bg-dark mb-3">
        <div className="card-header">
          {dateCreate}
          <CloseIcon onClick={deleteSelectedComment} />
        </div>
        <div className="card-body">
          <h5 className="card-title">Your comment</h5>
          <div className="card-text">
            {isEdit ? (
              <textarea onChange={onChangeTextarea} value={textarea}></textarea>
            ) : (
              text
            )}
          </div>
          <div className="editIcon">
            <div className="editIcon-thumbUpIcon editIcon-allIcons">
              <ThumbUpIcon color="primary" />
              <p className="p-like">{like}</p>
            </div>
            <div
              onClick={isEdit ? saveEditedSelectedComment : editSelectedComment}
              className="editIcon-editIcon editIcon-allIcons"
            >
              {isEdit ? <SaveIcon /> : <EditIcon />}
            </div>
            <div className="editIcon-thumbDownAltIcon editIcon-allIcons">
              <ThumbDownAltIcon color="secondary" />
              <p className="p-dislike">{dislike}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
