import { makeExecutableSchema } from 'apollo-server';
import types from './types';
import resolvers from './resolvers';

export const schema = makeExecutableSchema({
  typeDefs: types,
  resolvers: resolvers
});
