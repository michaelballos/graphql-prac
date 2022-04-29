const { gql } = require('apollo-server');

const typeDefs = gql`
"A track is a group of modules that teaches about specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }
`

module.export = typeDefs;