import feathersMongoose from 'feathers-mongoose';
import { ListModel } from './list.schema.js';

const { Service } = feathersMongoose;
export class ListService extends Service {
  /**
   * @name find
   * @param {Object} params
   * @returns {Object}
   * @description
   */
  async find(params) {
    const _params = {
      ...params,
      query: {
        ...params.query,
        $populate: {
          path: 'todos',
        },
        isDeleted: false,
      },
    };
    const data = await super.find(_params);
    return data;
  }

  /**
   * @name get
   * @param {Object} params
   * @param {Object} id
   * @returns {Object}
   * @description
   */
  async get(id, params) {
    const _params = {
      ...params,
      query: {
        ...params.query,
        $populate: {
          path: 'todos',
        },
      },
    };
    const data = super.get(id, _params);
    return data;
  }

  /**
   * @name create
   * @param {Object} params
   * @param {Object} data
   * @returns {Object}
   * @description
   */
  async create(data, params) {
    const _params = {
      ...params,
    };
    return await super.create(data, _params);
  }

  /**
   * @name patch
   * @param {Object} params
   * @param {Object} id
   * @param {Object} data
   * @returns {Object}
   * @description
   */
  async patch(id, data, params) {
    let _data = await super.get(id, params);
    _data = {
      ...data,
      todos: [..._data.todos, ...data?.todos],
    };
    return await super.patch(id, _data, params);
  }

  /**
   * @name delete
   * @param {Object} params
   * @param {Object} id
   * @returns {Object}
   * @description
   */
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
    whitelist: '$populate',
  };
};
