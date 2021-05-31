import { query } from './query';
import { mutation } from './mutation';

export const customerResolver = Object.assign({}, query, mutation);

export default customerResolver;
