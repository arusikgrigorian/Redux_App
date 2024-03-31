import { ADD_RECIPE } from '../constants/actionTypes';

const addRecipe = (name) => {
  return { type: ADD_RECIPE, payload: { name } };
};

export default addRecipe;
