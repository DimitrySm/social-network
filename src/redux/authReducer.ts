const SET_USER_DATA = "SET_USER_DATA";

export type AuthType = {
  id: null | number;
  email: null | string;
  login: null | string;
  isAuth: boolean;
};

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const AuthReducer = (state: AuthType = initialState, action: ActionsTyps) => {
  debugger;
  switch (action.type) {
    case SET_USER_DATA:
      debugger;
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

type setUserDataACType = ReturnType<typeof setAuthUserData>;

export type ActionsTyps = setUserDataACType;

export const setAuthUserData = (
  id: null | string,
  email: null | string,
  login: null | string
) =>
  ({
    type: SET_USER_DATA,
    data: {
      id,
      email,
      login,
    },
  } as const);

export default AuthReducer;
