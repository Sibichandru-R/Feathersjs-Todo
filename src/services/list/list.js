import { ListService, getOptions } from './list.class.js';

export const listPath = 'list';
export const listMethods = ['find', 'get', 'create', 'patch', 'remove'];

export * from './list.class.js';
export * from './list.schema.js';

/**
 * @name list
 * @param {import('@feathersjs/feathers').Application} app
 */
export const list = (app) => {
  //adds the service to the route of given path and creates a new instance of the service
  app.use(listPath, new ListService(getOptions(app)), {
    methods: listMethods,
    events: [],
  });

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
