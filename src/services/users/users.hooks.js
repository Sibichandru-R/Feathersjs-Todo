import { resolve } from '@feathersjs/schema'

export const userExternalResolver = resolve({
  properties: {
    password: async () => undefined
  }
})
