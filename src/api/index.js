import { REPORTS } from "../configs";
import { get } from '../utils/axiosWrapper.tsx';

export const ReportsCall = (params) => get({url: REPORTS, params: params});