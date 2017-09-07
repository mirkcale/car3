import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const myReduce = combineReducers({
  todos,
  visibilityFilter
});

export default myReduce;