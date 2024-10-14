import { UserService, getOptions } from './users.class.js';
import { hooks as schemaHooks } from '@feathersjs/schema';

import { userExternalResolver, userPopulateData, userDataResolver } from './users.hooks.js';
export const userPath = 'users';
export const userMethods = ['find', 'get', 'create', 'patch', 'remove'];

export * from './users.class.js';
export * from './users.schema.js';

export const user = (app) => {
  app.use(userPath, new UserService(getOptions(app)), {
    methods: userMethods,
    events: [],
  });
  // Initialize hooks
  app.service(userPath).hooks({
    around: {
      all: [],
      find: [schemaHooks.resolveExternal(userExternalResolver)],
      get: [schemaHooks.resolveExternal(userExternalResolver)],
      create: [],
    },
    before: {
      all: [],
      find: [userPopulateData],
      get: [userPopulateData],
      create: [schemaHooks.resolveData(userDataResolver)],
      patch: [],
      remove: [],
    },
    after: {},
    error: {
      all: [],
    },
  });
};
