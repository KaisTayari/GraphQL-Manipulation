const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLList } = graphql;
const UserType = require("../TypeDefs/userType");
const userData = require("../../MOCK_DATA.json");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return userData;
      },
    },
  },
});

module.exports = RootQuery;
