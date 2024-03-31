import { combineReducers } from 'redux';
import recipeReducer from './recipe';
import ingredientReducer from './ingredient';

const rootReducer = combineReducers({
  recipes: recipeReducer,
  ingredients: ingredientReducer,
});

export default rootReducer;
