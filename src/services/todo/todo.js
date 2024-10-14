import { TodoService, getOptions } from './todo.class.js';

export const todo = (app) => {
  app.use('user/:user_id/list/:list_id/todo', new TodoService(getOptions(app)));
  app.service('user/:user_id/list/:list_id/todo').hooks({
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
      create: [],
      remove: [],
    },
  });
};
