const graphql = require("graphql");
const { GraphQLSchema } = graphql;
const Mutation = require("./Mutations/createUserMutation");
const RootQuery = require("./Queries/getAllUsersQuery");

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

module.exports = schema;
