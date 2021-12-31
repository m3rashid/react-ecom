import { gql } from "apollo-server";

const typeDefs = gql`
  type Review {
    count: Int!
    rate: [Int!]!
  }

  type Item {
    id: ID!
    category: String!
    description: String!
    image: String!
    price: Float!
    rating: Rating!
    title: String!
    createdAt: Date
    updatedAt: Date
  }

  type Category {
    id: ID!
    name: String!
    description: String!
  }

  type Query {
    items: [Item!]!
    item(id: ID!): Item
    itemByCategory(category: String!): [Item!]!
  }

  input ItemInput {
    category: [Category!]!
    description: String!
    image: String!
    price: Float!
    rating: RatingInput!
    title: String!
    count: Int!
    rate: Int!
  }

  type Mutation {
    addItem: (input: ItemInput): Item!
    removeItem: (id: ID!): Item!
    updateItem: (id: ID!, input: ItemInput): Item!
  }
`;

export default typeDefs;
