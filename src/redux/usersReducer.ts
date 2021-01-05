const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

export type locationType = {
  city: string;
  country: string;
};

export type UserDataType = {
  id: number;
  photoUrl: string;
  fullName: string;
  status: string;
  location: locationType;
  followed: boolean;
};

export type UsersPageType = {
  users: Array<UserDataType>;
};

let initialState = {
  users: [],
};

const UsersReducer = (
  state: UsersPageType = initialState,
  action: ActionsTyps
) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u: UserDataType) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u: UserDataType) => {
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

type followACType = ReturnType<typeof followAC>;
type unfollowACType = ReturnType<typeof unfollowAC>;
type setUsersACType = ReturnType<typeof setUsersAC>;

export type ActionsTyps = followACType | unfollowACType | setUsersACType;

export const followAC = (userId: number) =>
  ({
    type: FOLLOW,
    userId,
  } as const);
export const unfollowAC = (userId: number) =>
  ({
    type: UNFOLLOW,
    userId,
  } as const);
export const setUsersAC = (users: Array<UserDataType>) =>
  ({
    type: SET_USERS,
    users,
  } as const);

export default UsersReducer;
