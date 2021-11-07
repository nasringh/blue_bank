import axios, { Method } from 'axios';
import { BASE_URL } from '../configs';

const _instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Access-Control-Allow-Origin': '*',
  }
});

type CallType = {
  method: Method,
  url: string,
  params?: any,
};
type GetType = ({url, params}: Omit<CallType, 'method'>) => any;

const _call = async ({ method, url, params }: CallType) => {
  try{
    const data = await _instance.request({method, url, params});
    return data;
  }
  catch(e) {
    console.log('error: ' , e);
    throw e;
  }
};

export const get: GetType = ({ url, params }) => _call({ method: 'GET', url, params });