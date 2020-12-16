import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";
import { ProfilePageType } from "../../redux/state";

type PropsType = {
  profilePage: ProfilePageType;
  dispatch: (action: any) => void;
};

const Profile = (props: PropsType) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts
        profilePage={props.profilePage}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};
export default Profile;
