import feathersMongoose from 'feathers-mongoose';
import { TodoModel } from './todo.schema.js';

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
        list: params.route.list_id,
        isDeleted: false,
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
        list: params.route.list_id,
        isDeleted: false,
      },
    };
    return super.get(id, _params);
  }

  /**
   *
   * @param {object} data
   * @param {object} params
   * @description Gets the data and params to create new entry
   * @returns {object}
   */
  async create(data, params) {
    const _data = {
      ...data,
      list: params.route.list_id,
    };
    return await super.create(_data, params);
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
    return super.patch(id, data, params);
  }
  /**
   *
   * @param {string} id
   * @param {object} params
   * @description Gets the data and id to delete and calls the delete adapter
   * @returns {object}
   */
  async remove(id, params) {
    const data = { isDeleted: true };
    return await super.patch(id, data, params);
  }
}

export const getOptions = (app) => {
  return {
    paginate: app.get('paginate'),
    Model: TodoModel(app),
    whitelist: ['$populate'],
  };
};
