import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";

type PropsType = {
  profile: any;
};

const ProfileInfo = (props: PropsType) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <img
        className={s.background__img}
        src="https://static.tonkosti.ru/images/7/7c/%D0%9F%D1%80%D0%B5%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D1%8B%D0%B5_%D0%BF%D0%BB%D1%8F%D0%B6%D0%B8_%D0%9F%D1%80%D0%B0%D1%81%D0%BB%D0%B8%D0%BD%D0%B0,_%D0%A1%D0%B5%D0%B9%D1%88%D0%B5%D0%BB%D1%8B.jpg"
        alt="beach"
      />
      <div>
        <img src={props.profile.photos.large} alt="" />
        <p>Обо мне: {props.profile.aboutMe}</p>
        <p>Мое полное имя: {props.profile.fullName}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
