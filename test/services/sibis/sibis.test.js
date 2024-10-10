// For more information about this file see https://dove.feathersjs.com/guides/cli/service.test.html
import assert from 'assert'
import { app } from '../../../src/app.js'

describe('sibis service', () => {
  it('registered the service', () => {
    const service = app.service('sibis')

    assert.ok(service, 'Registered the service')
  })
})
