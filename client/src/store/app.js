export const USER_LOGIN = "boii/app/USER_LOGIN";
export const USER_LOGOUT = "boii/app/USER_LOGOUT";

export const initialState = { user: null };

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default appReducer;
