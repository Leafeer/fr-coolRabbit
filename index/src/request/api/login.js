import { get, post } from '../http'
export const register = (params )=> post('register',params)
export const login = (params )=> post('login',params)
export const list = ()=> get('userlist')