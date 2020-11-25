export const SET_DRAWER_OPEN_STATE = "boii/utils/SET_DRAWER_OPEN_STATE";

export const initialState = { isDrawerOpen: false };

const utilsReducer = (state = initialState, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default utilsReducer;
