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
    console.log(params.route.user_id);
    const _params = {
      ...params,
      query: {
        ...params.query,
        $populate: [
          {
            path: 'user',
            select: 'email',
          },
        ],
        isDeleted: false,
        user: params.route.user_id,
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
        isDeleted: false,
        user: params.route.user_id,
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
    const _data = {
      ...data,
      user: params.route.user_id,
    };
    console.log(_data)
    return await super.create(_data, params);
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
    return await super.patch(id, data, params);
  }

  /**
   * @name delete
   * @param {Object} params
   * @param {Object} id
   * @returns {Object}
   * @description
   */
  async remove(id, params) {
    const data = { isDeleted: true };
    return await super.patch(id, data, params);
  }
}

export const getOptions = (app) => {
  return {
    paginate: app.get('paginate'),
    Model: ListModel(app),
    whitelist: '$populate',
  };
};
