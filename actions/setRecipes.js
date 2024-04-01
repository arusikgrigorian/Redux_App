import { SET_RECIPES } from '../constants/actionTypes';

const setRecipes = (recipes) => {
  return {
    type: SET_RECIPES,
    payload: {
      recipes,
    },
  };
};

export default setRecipes;
