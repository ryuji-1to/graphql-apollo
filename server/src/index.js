const { ApolloServer, gql } = require('apollo-server');
const { Query } = require('./graphql/query');
const { Mutation } = require('./graphql/mutation');

const typeDefs = gql`
  type Todo {
    id: Int
    text: String
    isDone: Boolean
    createdAt: String
  }

  type Query {
    todos: [Todo]
  }

  type Mutation {
    addTodo(text: String!): Todo
    toggleIsDone(id: ID!, isDone: Boolean): Todo
    deleteTodoById(id: ID!): Todo
    deleteIsDoneTodos: Todo
  }
  type subscription {
    todoAdded: Todo
  }
`;

const resolvers = {
  Query,
  Mutation,
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`listening on ${url} `);
});
