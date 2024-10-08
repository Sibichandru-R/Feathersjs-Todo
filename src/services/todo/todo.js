import { TodoService, getOptions } from './todo.class.js';
import { insertTodoIntoListReference, removeTodoFromListReference } from './todo.hooks.js';

export const todo = (app) => {
  //adds the service to the route of given path and creates a new instance of the service

  app.use('list/:list_id/todo', new TodoService(getOptions(app)));
  app.service('list/:list_id/todo').hooks({
    around: {
      all: [],
    },
    before: {
      all: [],
      get: [],
      create: [],
      patch: [],
      remove: [],
    },
    after: {
      all: [],
      find: [],
      create: [insertTodoIntoListReference],
      remove: [removeTodoFromListReference],
    },
  });
};
