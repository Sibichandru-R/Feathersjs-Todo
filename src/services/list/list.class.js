import feathersMongoose from 'feathers-mongoose';
import { ListModel } from './list.schema.js';

const { Service } = feathersMongoose;
export class ListService extends Service {
  async find(params) {
    const _params = {
      ...params,
      query: {
        ...params.query,
        $populate: 'todos',
        isDeleted: false,
      },
    };
    const data = await super.find(_params);
    return data;
  }

  async get(id, params) {
    const _params = {
      ...params,
      query: {
        ...params.query,
        $populate: {
          path: 'subtasks',
        },
      },
    };
    const data = super.get(id, _params);
    return data;
  }
  async create(data, params) {
    const _params = {
      ...params,
    };
    return await super.create(data, _params);
  }
  async delete(id, params) {
    const _params = {
      ...params,
    };
    const data = { isDeleted: true };
    return await super.patch(id, data, _params);
  }
}

export const getOptions = (app) => {
  return {
    paginate: app.get('paginate'),
    Model: ListModel(app),
  };
};
