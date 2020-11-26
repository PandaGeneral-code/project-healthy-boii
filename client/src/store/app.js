const SET_PROFILE = "boii/app/SET_PROFILE";
const SET_USER = "boii/app/SET_USER";

export const initialState = { profile: "default", user: null };

const appReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case SET_PROFILE:
      return state;
    case SET_USER:
      return state;
    default:
      return state;
  }
};

export default appReducer;
