import { createStore } from 'redux';
import { appReducer, initialState } from './models/app';
import { Actions, State } from './types';

export default () => {
  return createStore<State, Actions, any, any>(appReducer, initialState);
};
