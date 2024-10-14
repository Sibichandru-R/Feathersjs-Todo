import { getModels } from '../users/users.schema.js';

export const defaultHooks = {
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
};
