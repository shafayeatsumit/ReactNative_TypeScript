import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

// all state of all store
export interface AppState {
  todos: Todo[];
}

export const reducers = combineReducers<AppState>({
  todos: todosReducer,
});
