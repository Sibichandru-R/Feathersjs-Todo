import { passwordHash } from '@feathersjs/authentication-local';
import { resolve } from '@feathersjs/schema';

const models = {};
export const userModel = (app) => {
  const modelName = 'User';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const userSchema = new Schema({
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    list: [
      {
        type: Schema.Types.ObjectId,
        ref: 'List',
      },
    ],
  });

  models.User = mongooseClient.model(modelName, userSchema);
  return models.User;
};

export const getModels = (modelName) => models[modelName];

export const userDataResolver = resolve({
  properties: {
    password: passwordHash({ strategy: 'local' }),
  },
});
