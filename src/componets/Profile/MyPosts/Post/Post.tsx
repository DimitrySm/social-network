// import { type } from "os";
import React from "react";
import s from "./Post.module.css";

type messageType = {
  message: string;
  likesCount: number;
};

const Post = (props: messageType) => {
  return (
    <div className={s.item}>
      <img
        src="https://s8.cdn.teleprogramma.pro/wp-content/uploads/2020/01/e187d44f997b399185adaf352cc17b83.jpg"
        alt=""
      />{" "}
      {props.message}
      <div>
        <span>like {props.likesCount}</span>
      </div>
    </div>
  );
};
export default Post;
