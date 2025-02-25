import { createStore } from 'redux';
import gridReducer from './reducer';

const index = createStore(gridReducer);

export default index;
