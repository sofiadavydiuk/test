import {combineReducers} from 'redux';
import {sourceReducer} from './source/source-reducer';

export const rootReducer = combineReducers({
  source: sourceReducer,
});
