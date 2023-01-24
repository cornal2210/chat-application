import axios, { AxiosRequestConfig } from 'axios'
import { CreateUserParams, UserCredentialsParams } from './types';

const API_URL = process.env.REACT_APP_API_URL;
const axiosClient = axios.create({ baseURL: API_URL })
const config: AxiosRequestConfig = {
    withCredentials: true,
};

export const postRegisterUser = (data: CreateUserParams) => axiosClient.post(`/api/auth/register`, data, config)

export const checkUsernameExists = (username: string) =>
  axiosClient.get(`/api/users?username=${username}`, config);

export const login = (data: UserCredentialsParams) =>
  axiosClient.post(`/api/auth/login`, data, config);