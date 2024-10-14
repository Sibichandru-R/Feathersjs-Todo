import feathersMongoose from 'feathers-mongoose';
import { SubtaskModel } from './subtask.schema.js';

const { Service } = feathersMongoose;

export class SubtaskService extends Service {
  async find(params) {
    const _params = {
      ...params,
      query: {
        ...params.query,
        todo: params.route.todo_id,
        isDeleted: false,
      },
    };
    console.log(_params)
    return await super.find(_params);
  }
  /**
   * @name get
   * @param {*} id
   * @param {*} params
   * @returns {object} data
   */
  async get(id, params) {
    const _params = {
      ...params,
      query: {
        ...params.query,
        litodost: params.route.todo_id,
        isDeleted: false,
      },
    };
    return await super.get(id, _params);
  }

  async create(data, params) {
    const _data = {
      ...data,
      todo: params.route.todo_id,
    };
    return await super.create(_data, params);
  }

  async delete(id, params) {
    const data = { isDeleted: true };
    return await super.patch(id, data, params);
  }
}

export const getOptions = (app) => {
  return {
    paginate: app.get('paginate'),
    Model: SubtaskModel(app),
  };
};
