import { ListService, getOptions } from './list.class.js';

export const listPath = 'list';
export const listMethods = ['find', 'get', 'create', 'patch', 'remove'];

export const list = (app) => {
  //adds the service to the route of given path and creates a new instance of the service
  app.use(listPath, new ListService(getOptions(app)), {
    methods: listMethods,
    events: [],
  });
  // Initialize hooks
  app.service(listPath).hooks({
    around: {
      all: [],
    },
    before: {
      all: [],
      find: [],
      get: [],
      create: [],
      patch: [],
      remove: [],
    },
    after: {
      all: [],
    },
    error: {
      all: [],
    },
  });
};
