import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { StoreReduxType } from "../../redux/redux-store";

type PropsType = {
  store: StoreReduxType;
};

const Profile = (props: PropsType) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  );
};
export default Profile;
