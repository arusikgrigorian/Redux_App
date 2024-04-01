import getData from '../api/getData';
import setRecipes from '../actions/setRecipes';
import { FETCH_RECIPES } from '../constants/actionTypes';
import { URL } from '../api/constants';

const requestRecipes = ({ dispatch }) => {
  return (next) => {
    return (action) => {
      if (action.type === FETCH_RECIPES) {
        getData(URL, (recipe) => dispatch(setRecipes(recipe)));
      }

      next(action);
    };
  };
};

export default requestRecipes;
