import { passwordHash } from "@feathersjs/authentication-local";
import { resolve } from "@feathersjs/schema";

const models = {};
export const userModel = (app) => {
  const modelName = 'User';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const userSchema = new Schema({
    email: String,
    password: String,
  });

  models.User = mongooseClient.model(modelName, userSchema);
  return models.User;
};

// export const getModels = (modelName) => models[modelName];

export const userDataResolver = resolve({
  properties: {
    password: passwordHash({ strategy: 'local' })
  }
})
