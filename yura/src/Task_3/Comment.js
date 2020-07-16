import React, { useState } from "react";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
function Comment({ id, text, dateCreate, like, dislike, deleteComment }) {
  const deleteSelectedComment = () => {
    deleteComment(id);
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
          <div className="card-text">{text}</div>
          <div className="editIcon">
            <div className="editIcon-thumbUpIcon editIcon-allIcons">
              <ThumbUpIcon color="primary" />
              <p className="p-like">{like}</p>
            </div>
            <div className="editIcon-editIcon editIcon-allIcons">
              <EditIcon />
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
