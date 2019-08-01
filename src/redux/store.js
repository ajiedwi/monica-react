import { createStore, combineReducers } from 'redux';

// import reducer
import * as Reducer from './reducer';

const rootReducer = combineReducers({
  userState: Reducer.userReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;