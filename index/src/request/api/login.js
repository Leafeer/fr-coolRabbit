import { get, post } from '../http'
export const registered = (params )=> post('registered',params)
export const login = (params )=> post('login',params)
export const list = ()=> get('userlist')