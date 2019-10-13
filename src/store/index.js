import {createStore, combineReducers} from 'redux';
import conunterReducer from './counter.store.js';
import personReducer from './person.store.js'

let reducers = combineReducers({
  counter: conunterReducer,
  person: personReducer
});

export default () => createStore(reducers)