import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

// type PropsType = {
//   store: StoreReduxType;
// };

const Profile = () => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};
export default Profile;
