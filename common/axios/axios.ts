import axios from 'axios';
import { API_URL } from '../../common/constants/constants';

export const API = axios.create({
  baseURL: API_URL,
});
