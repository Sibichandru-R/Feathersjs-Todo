import { list } from './list/list.js';
import { subtask } from './subtask/subtask.js';
import { todo } from './todo/todo.js';
export const services = (app) => {
  app.configure(list);

  app.configure(subtask);

  app.configure(todo);
};
