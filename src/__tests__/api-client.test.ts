import { ApiClient } from '../api-client'

describe('ApiClient', () => {
  it('Creates an instance of ApiClient', () => {
    const apiClient = new ApiClient()
    expect(apiClient).toBeInstanceOf(ApiClient)
  })

  it('Has an app key', () => {
    const apiClient = new ApiClient()
    expect(apiClient).toHaveProperty('appKey')
  })

  it('Has an app secret', () => {
    const apiClient = new ApiClient()
    expect(apiClient).toHaveProperty('appSecret')
  })

  it('Has an apiCall method', () => {
    const apiClient = new ApiClient()
    expect(apiClient).toHaveProperty('apiCall')
  })
})
