import axios from 'axios'
import qs from 'qs'
import https from 'https'
import router from '../router'
import store from '../store/store'
import {
  ToastPlugin
} from 'vux'
import Vue from 'vue'
import {
  api
} from '../request/index'

Vue.use(ToastPlugin)

let vm = new Vue()

axios.defaults.timeout = 60000
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8;'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'X-Requested-With'
axios.defaults.headers.put['Content-Type'] = 'application/json;charset=UTF-8;'
axios.defaults.headers.delete['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.baseURL = process.env.API_ROOT

/**
 * get
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

/**
 * post
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

/**
 * put
 */
export function put(url, params) {
  return new Promise((resolve, reject) => {
    axios.put(url, params)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}

/**
 * delete
 */
export function del(url, params) {
  return new Promise((resolve, reject) => {
    axios.delete(url, {
        data: {
          data: params
        }
      })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
