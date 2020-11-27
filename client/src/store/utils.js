import Containers from "../Containers/index";

export const SET_AVAILABLE_CONTAINERS = "utils/SET_AVAILABLE_CONTAINERS";
export const SET_DRAWER_VISIBILITY = "utils/SET_DRAWER_VISIBILITY";

export const initialState = {
  availableContainers: Containers,
  isDrawerVisible: false,
};

const utilsReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case SET_AVAILABLE_CONTAINERS:
      return { ...state, availableContainers: payload.availableContainers };
    case SET_DRAWER_VISIBILITY:
      return { ...state, isDrawerVisible: payload.drawerVisibility };
    default:
      return state;
  }
};

export default utilsReducer;
