import { passwordHash } from '@feathersjs/authentication-local';
import { resolve } from '@feathersjs/schema';

export const userExternalResolver = resolve({
  properties: {
    password: async () => undefined,
  },
});

export const userDataResolver = resolve({
  properties: {
    password: passwordHash({ strategy: 'local' }),
  },
});

export const userPopulateData = (context) => {
  context.params.query = {
    $populate: {
      path: 'list',
    },
  };
};
