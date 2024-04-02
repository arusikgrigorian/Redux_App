import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/root';
import logAction from './middleware/logAction';
import requestRecipes from './middleware/requestRecipes';
//import thunk from 'redux-thunk';

//const store = createStore(rootReducer, applyMiddleware(thunk));
const store = createStore(rootReducer, applyMiddleware(logAction, requestRecipes));

export default store;
