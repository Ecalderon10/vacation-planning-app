const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    password: String!
    trip: [Trip]
  }

  type Trip {
    _id: ID!
    title: String!
    location: String!
    startDate: String!
    endDate: String!
    description: String
    tasks: [Task]
    budget: [Budget]
  }

  type Task {
    _id: ID!
    title: String!
    details: String
    dueDate: String!
    status: Boolean!
    assignee: String!
  }

  type Budget {
    _id: ID!
    title: String!
    value: Int!
    purchaseDate: String!
    purchasedBy: String!
  }

  type Auth {
    token: String!
    user: User
  }

  type Query {
    user(username: String!): User
    users: [User]!
    trip(tripId: ID!): Trip
    trips: [Trip]!
    tasks: [Task]!
    task(taskId: ID!): Task
    budgets: [Budget]!
    budget(budgetId: ID!): Budget
  }

  type Mutation {
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addTrip(userId: ID!, title: String!, description: String, location: String!, startDate: String!, endDate: String!): Trip
    addTask(tripId: ID!, title: String!, details: String, dueDate: String!, status: Boolean!, assignee: String!): Task
    addBudget(tripId: ID!, title: String!, value: Int!, purchaseDate: String!, purchasedBy: String!): Budget
    updateTrip(tripId: ID!, title: String, description: String, location: String, startDate: String, endDate: String): Trip
    updateTask(tripId: ID!, taskId: ID!, title: String, details: String, dueDate: String, status: Boolean, assignee: String): Task
    updateBudget(tripId: ID!, budgetId: ID!, title: String, value: Int, purchaseDate: String, purchasedBy: String): Budget
    removeTrip(userId:ID!, tripId: ID!): User
    removeTask(tripId: ID!, taskId: ID!): Trip
    removeBudget(tripId: ID!, budgetId: ID!): Trip
  }
`;

module.exports = typeDefs;
