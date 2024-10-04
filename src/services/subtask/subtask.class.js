import feathersMongoose from 'feathers-mongoose';
import { SubtaskModel } from './subtask.schema.js';

const { Service } = feathersMongoose;

export class SubtaskService extends Service {
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
        $populate: {
          path: 'todo',
        },
      },
    };
    const data = await super.get(id, _params);
    return data;
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
