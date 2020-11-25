export const FOOD_SELECTED = "boii/food/FOOD_SELECTED";

export const initialState = { selectedFood: null };

const foodReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default foodReducer;
