import feathersMongoose from 'feathers-mongoose';
import { userModel } from './users.schema.js';

const { Service } = feathersMongoose;
export class UserService extends Service {

}

export const getOptions = (app) => {
  return {
    paginate: app.get('paginate'),
    Model: userModel(app),
  };
};
