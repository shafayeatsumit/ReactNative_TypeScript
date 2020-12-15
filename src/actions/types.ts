// these action types has to be unique
// it doesn't require to assign any string.
import { FetchTodosAction, DeleteTodoAction } from './todos';
export enum ActionTypes {
  fetchTodos,
  deleteTodo,
}

export type TodosAction = FetchTodosAction | DeleteTodoAction;
