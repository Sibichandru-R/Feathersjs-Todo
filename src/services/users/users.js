import { UserService, getOptions } from './users.class.js';
import { hooks as schemaHooks } from '@feathersjs/schema';

import { userDataResolver } from './users.schema.js';
import { userExternalResolver } from './users.hooks.js';
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
      all: [schemaHooks.resolveExternal(userExternalResolver)],
      // find: [authenticate('jwt')],
      // get: [authenticate('jwt')],
      create: [],
      // update: [authenticate('jwt')],
      // patch: [authenticate('jwt')],
      // remove: [authenticate('jwt')]
    },
    before: {
      all: [],
      find: [],
      get: [],
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
