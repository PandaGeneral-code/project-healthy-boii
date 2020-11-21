export const USER_LOGIN = "boii/app/USER_LOGIN";
export const USER_LOGOUT = "boii/app/USER_LOGOUT";

export const initialState = { user: null };

const appReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case USER_LOGIN:
      return { ...state, user: payload.user };
    case USER_LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default appReducer;
