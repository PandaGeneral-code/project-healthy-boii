export const SET_DRAWER_OPEN_STATE = "boii/utils/SET_DRAWER_OPEN_STATE";

export const initialState = { isDrawerOpen: false };

const utilsReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case SET_DRAWER_OPEN_STATE:
      return { ...state, isDrawerOpen: payload.drawerOpenState };
    default:
      return state;
  }
};

export default utilsReducer;
