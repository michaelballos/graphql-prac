const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    tracksForHome: [Track!]!
  }

"A track is a group of modules that teaches about specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    name: String!
    photo: String
`

module.export = typeDefs;