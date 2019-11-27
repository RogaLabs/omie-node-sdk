import { ApiClient } from '../api-client'

let apiClient: ApiClient

beforeAll(() => {
  apiClient = new ApiClient()
})

describe('ApiClient', () => {
  it('Creates an instance of ApiClient', () => {
    expect(apiClient).toBeInstanceOf(ApiClient)
  })

  it('Has an app key', () => {
    expect(apiClient).toHaveProperty('appKey')
  })

  it('Has an app secret', () => {
    expect(apiClient).toHaveProperty('appSecret')
  })

  it('Has an apiCall method', () => {
    expect(apiClient).toHaveProperty('apiCall')
  })
})
