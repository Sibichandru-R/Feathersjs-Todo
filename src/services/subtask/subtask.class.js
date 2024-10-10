import feathersMongoose from 'feathers-mongoose';
import { SubtaskModel } from './subtask.schema.js';

const { Service } = feathersMongoose;

export class SubtaskService extends Service {
  async find(params) {
    console.log(params);
    return await super.find(params);
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
      },
    };
    const data = await super.get(id, _params);
    return data;
  }

  async create(data, params) {
    const _params = {
      ...params,
    };
    const response = await super.create(data, _params);
    return response;
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
    Model: SubtaskModel(app),
  };
};
