const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [],
};

const UsersReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u: any) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u: any) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    default:
      return state;
  }
};

export const followAC = (userId: any) =>
  ({
    type: FOLLOW,
    userId,
  } as const);
export const unfollowAC = (userId: any) =>
  ({
    type: UNFOLLOW,
    userId,
  } as const);
export const setUsersAC = (users: any) =>
  ({
    type: SET_USERS,
    users,
  } as const);

export default UsersReducer;
