import feathersMongoose from 'feathers-mongoose';
import { userModel } from './users.schema.js';

const { Service } = feathersMongoose;
export class UserService extends Service {
  async create(data, params) {
    console.log(data, 'data');
    console.log(params, 'params');
    //change to super.get method later
    const user = await this.Model.findOne({ email: data.email });
    if (!user) {
      await super.create(data, params);
    } else {
      throw new Error('User already exist');
    }
  }
}

export const getOptions = (app) => {
  return {
    paginate: app.get('paginate'),
    Model: userModel(app),
  };
};
