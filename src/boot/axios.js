import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

Vue.prototype.$httpClient = axios.create({
  baseURL: process.env.BACKEND_URL
})
