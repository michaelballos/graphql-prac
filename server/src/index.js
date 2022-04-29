const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const server = new ApolloServer({typeDefs});

server.listen().then(() => {
  console.log('Server is running on http://localhost:4000');
})