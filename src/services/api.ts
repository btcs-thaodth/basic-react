import axios, { AxiosResponse } from 'axios'

class Api {
  get = async <T>(url: string, params: any) => {
    return await axios<any, AxiosResponse<T>>(url, {
      method: 'GET',
      params,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.data)
  }

  post = async <T>(url: string, data: T) => {
    return await axios(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    }).then((response) => response.data)
  }

  patch = async <T>(url: string, data: T) => {
    return await axios(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    }).then((response) => response.data)
  }

  put = async <T>(url: string, data: T) => {
    return await axios(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    }).then((response) => response.data)
  }

  delete = async (url: string) => {
    return await axios(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.data)
  }
}

export default new Api()
