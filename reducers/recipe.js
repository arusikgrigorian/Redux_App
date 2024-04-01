import { ADD_RECIPE, SET_RECIPES } from '../constants/actionTypes';

const recipeReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_RECIPE:
      return [...state, { name: payload.name }];

    case SET_RECIPES:
      return [...state, ...payload.recipes];

    default:
      return state;
  }
};

export default recipeReducer;
