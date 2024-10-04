// For more information about this file see https://dove.feathersjs.com/guides/cli/service.test.html
import assert from 'assert';
import { app } from '../../../src/app.js';

describe('subtask service', () => {
  it('registered the service', () => {
    const service = app.service('subtask');

    assert.ok(service, 'Registered the service');
  });
});
