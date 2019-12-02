import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig, Method } from 'axios'
import config from 'config'

/**
 *
 *
 * @export
 * @class ApiClient
 */
export class ApiClient {
  /**
   * The app key for API authentication
   *
   * @type {string}
   * @memberof ApiClient
   */
  public readonly appKey: string;

  /**
   * The app secret for API authentication
   *
   * @type {string}
   * @memberof ApiClient
   */
  public readonly appSecret: string;

  /**
   * The axios instance used as the web client
   *
   * @private
   * @type {AxiosInstance}
   * @memberof ApiClient
   */
  private axios: AxiosInstance;

  /**
   *Creates an instance of ApiClient.
   * @memberof ApiClient
   */
  constructor () {
    this.appKey = config.get('Credentials.app_key')
    this.appSecret = config.get('Credentials.app_secret')

    this.axios = axios.create({
      baseURL: 'http://app.omie.com.br/api/v1/',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }

  /**
   *
   *
   * @param {string} method
   * @param {APICallOptions} options
   * @returns {Promise<AxiosResponse>}
   * @memberof ApiClient
   */
  protected apiCall (method: Method, options: APICallOptions): Promise<AxiosResponse> {
    const { url, action, data } = options
    const body = this.buildRequestBody(action, data)
    return this.axios.request({
      data: body,
      method,
      url
    })
  }

  /**
   *
   *
   * @private
   * @param {string} action
   * @param {*} [data]
   * @returns {APIRequestBody}
   * @memberof ApiClient
   */
  private buildRequestBody (action: string, data?: any): APIRequestBody { // eslint-disable-line @typescript-eslint/no-explicit-any
    const requestBody: APIRequestBody = {
      app_key: this.appKey, // eslint-disable-line camelcase, @typescript-eslint/camelcase
      app_secret: this.appSecret, // eslint-disable-line camelcase, @typescript-eslint/camelcase
      call: action,
      param: [{ ...data }]
    }

    return requestBody
  }
}

/**
 *
 *
 * @export
 * @interface APIRequestBody
 */
export interface APIRequestBody {
  call: string;
  app_key?: string; // eslint-disable-line camelcase
  app_secret?: string; // eslint-disable-line camelcase
  param?: any[]; // eslint-disable-line @typescript-eslint/no-explicit-any
}

/**
 *
 *
 * @export
 * @interface APICallOptions
 */
export interface APICallOptions {
  url: string;
  action: string;
  data?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  config?: AxiosRequestConfig;
}
