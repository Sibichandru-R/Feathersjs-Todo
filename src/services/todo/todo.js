import { TodoService, getOptions } from './todo.class.js';

export const todo = (app) => {
  //adds the service to the route of given path and creates a new instance of the service
  app.use('todo', new TodoService(getOptions(app)));
};
