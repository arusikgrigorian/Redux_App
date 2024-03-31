import { ADD_INGREDIENT } from '../constants/actionTypes';

const addIngredient = (recipe, name, quantity) => {
  return {
    type: ADD_INGREDIENT,
    payload: { recipe, name, quantity },
  };
};

export default addIngredient;
