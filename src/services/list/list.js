import { ListService, getOptions } from './list.class.js';
import { defaultHooks } from './list.hooks.js';

export const listPath = 'user/:user_id/list';
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

  app.service(listPath).hooks(defaultHooks);
};
