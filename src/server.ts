import { ApolloServer, gql } from 'apollo-server';

const schema = gql`
  type Product {
    id: ID!
    name: String!
  }
  type Query {
    products: [Product]!
  }
`;

const resolvers = {
  Query: {
    products: () => [{ id: 1, name: 'Test' }]
  }
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers
});

server
  .listen()
  .then(({ url }) => {
    console.log(`Server ready at ${url}`);
  })
  .catch((err: Error) => console.log(`error: ${err.message}`));
