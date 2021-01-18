import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type PropsType = {
  profile: any;
};

const Profile = (props: PropsType) => {
  return (
    <div className={s.content}>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
};
export default Profile;
