import React from "react";
import { UserDataType } from "../../redux/usersReducer";
import s from "./Users.module.css";
import userPhoto from "../../assets/imgs/user_male.png";
import { NavLink } from "react-router-dom";

type PropsType = {
  users: Array<UserDataType>;
  onPageChanged: (pageNumber: number) => void;
  unfollowThunkCreater: (id: number) => void;
  followThunkCreater: (id: number) => void;
  pageSize: number;
  totalUsersCount: number;
  curentPage: number;
  followingInProgress: any;
};

let Users = (props: PropsType) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              onClick={(e) => {
                props.onPageChanged(p);
              }}
              className={props.curentPage === p ? s.selected : ""}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u: any) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt=""
                  className={s.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some(
                    (id: any) => id === u.id
                  )}
                  onClick={() => {
                    props.unfollowThunkCreater(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some(
                    (id: any) => id === u.id
                  )}
                  onClick={() => {
                    props.followThunkCreater(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
