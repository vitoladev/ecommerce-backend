import { Customer } from '@prisma/client';
import { gql } from 'apollo-server';

export type AddressCreateInput = {
  readonly address: string;
  readonly postalCode: string;
  readonly city: string;
  readonly state: string;
  readonly district: string;
};

export type CustomerCreateInput = {
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly password: string;
  readonly address: AddressCreateInput;
};

export type tokenType = {
  readonly token: string;
  readonly customer: Customer;
};

export type LoginInput = {
  readonly email: string;
  readonly password: string;
};

export const customerTypeDefs = gql`
  scalar DateTime
  type Customer {
    id: ID!
    email: String!
    firstName: String!
    lastName: String!
    password: String!
    address: [Address]
    createdAt: DateTime
    updatedAt: DateTime
  }

  type Address {
    id: ID!
    customer: Customer
    customerId: ID
    address: String!
    postalCode: String!
    city: String!
    state: String!
    district: String!
  }

  type Token {
    token: String!
    customer: Customer!
  }

  input CreateAddress {
    address: String!
    postalCode: String!
    city: String!
    state: String!
    district: String!
  }

  input CreateCustomer {
    email: String!
    firstName: String!
    lastName: String!
    password: String!
    address: CreateAddress!
  }

  input LoginCustomer {
    email: String!
    password: String!
  }

  extend type Query {
    customers: [Customer]!
    customerById(id: ID!): Customer
    login(input: LoginCustomer): Token!
  }

  extend type Mutation {
    signUp(input: CreateCustomer): Token!
  }
`;
