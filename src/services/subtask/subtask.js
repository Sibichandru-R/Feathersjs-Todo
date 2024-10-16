import { SubtaskService, getOptions } from './subtask.class.js';

export const subtaskPath = 'user/:user_id/list/:list_id/todo/:todo_id/subtask';
export const subtaskMethods = ['find', 'get', 'create', 'patch', 'remove'];

export const subtask = (app) => {
  //adds the service to the route of given path and creates a new instance of the service
  app.use(subtaskPath, new SubtaskService(getOptions(app)), {
    methods: subtaskMethods,
    events: [],
  });
  // Initialize hooks
  app.service(subtaskPath).hooks({
    after: {
      find: [],
      create: [],
    },
  });
};
