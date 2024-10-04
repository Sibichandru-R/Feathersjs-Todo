import feathersMongoose from 'feathers-mongoose';
import { TodoModel } from './todo.schema.js';
import { ListService } from '../list/list.class.js';

const { Service } = feathersMongoose;
export class TodoService extends Service {
  /**
   * @name find
   * @param {object} params
   * @returns {object}
   */
  async find(params) {
    const _params = {
      ...params,
      query: {
        ...params.query,
        $populate: {
          path: 'subtasks',
        },
      },
    };
    return await super.find(_params);
  }
  /**
   * @name get
   * @param {string} id
   * @param {object} params
   * @description gets id and params
   * @returns {object}
   */
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
    const response = await super.create(data, _params);
    const { _id } = response;
    ListService.get
    return response;
  }
  /**
   *
   * @param {string} id
   * @param {object} data
   * @param {object} params
   * @description Gets the data and id to patch and calls the patch adapter
   * @returns {object}
   */
  async patch(id, data, params) {
    const _params = {
      ...params,
    };
    const response = super.patch(id, data, _params);
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
    Model: TodoModel(app),
    whitelist: ['$populate'],
  };
};
