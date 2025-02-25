import { createStore } from 'redux';
import gridReducer from './reducer';

const store = createStore(gridReducer);

export default store;
