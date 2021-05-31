import { customerTypeDefs } from './customer';
import { gql } from 'apollo-server';

export const baseTypeDefs = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`;

export default [baseTypeDefs, customerTypeDefs];
