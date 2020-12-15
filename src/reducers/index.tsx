import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';
// all state of all store
export interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});
