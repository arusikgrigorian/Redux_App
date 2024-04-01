import renderUI from './ui';
import store from './store';
import fetchRecipes from './actions/fetchRecipes';

renderUI();

store.dispatch(fetchRecipes());
