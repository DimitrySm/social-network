const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURENT_PAGE = "SET_CURENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

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
  pageSize: number;
  totalUsersCount: number;
  curentPage: number;
};

let initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  curentPage: 1,
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
    case SET_CURENT_PAGE: {
      return { ...state, curentPage: action.curentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.totalCount };
    }
    default:
      return state;
  }
};

type followACType = ReturnType<typeof followAC>;
type unfollowACType = ReturnType<typeof unfollowAC>;
type setUsersACType = ReturnType<typeof setUsersAC>;
type setCurentPageACType = ReturnType<typeof setCurentPageAC>;
type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>;

export type ActionsTyps =
  | followACType
  | unfollowACType
  | setUsersACType
  | setCurentPageACType
  | setTotalUsersCountACType;

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
export const setCurentPageAC = (curentPage: number) =>
  ({
    type: SET_CURENT_PAGE,
    curentPage: curentPage,
  } as const);
export const setTotalUsersCountAC = (totalCount: number) =>
  ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount: totalCount,
  } as const);

export default UsersReducer;
