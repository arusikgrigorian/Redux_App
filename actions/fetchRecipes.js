import { FETCH_RECIPES } from '../constants/actionTypes';

const fetchRecipes = () => {
  return { type: FETCH_RECIPES };
};

export default fetchRecipes;
