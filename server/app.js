require("dotenv").config();
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const userTypeDefs = require("./schema/users.js");
const postTypeDefs = require("./schema/posts.js");
const followTypeDefs = require("./schema/follows.js");
const userResolvers = require("./resolver/user.js");
const postResolvers = require("./resolver/post.js");
const followResolvers = require("./resolver/follow.js");
const { GraphQLError } = require("graphql");
const { verifyToken } = require("./helpers/jwt.js");

const server = new ApolloServer({
  typeDefs: [userTypeDefs, postTypeDefs, followTypeDefs],
  resolvers: [userResolvers, postResolvers, followResolvers],
  instropection: true,
});

startStandaloneServer(server, {
  listen: { port: process.env.PORT || 4000 },
  context: async ({ req }) => {
    return {
      authentication: async () => {
        const authorization = req.headers.authorization || "";
        // console.log(authorization, "<<< author");
        if (!authorization) {
          throw new GraphQLError("Unauthorized", {
            extensions: {
              code: "UNAUTHORIZED",
            },
          });
        }
        const token = authorization.split(" ")[1];
        // console.log(token, "<<< token");
        if (!token) {
          throw new GraphQLError("Unauthorized", {
            extensions: {
              code: "UNAUTHORIZED",
            },
          });
        }

        const decoded = verifyToken(token)
        // console.log(decoded, "----------");

        if (!decoded) {
          throw new GraphQLError("Unauthorized", {
            extensions: {
              code: "UNAUTHORIZED",
            },
          });
        }

        return decoded
      },
    };
  },
})
  .then(({ url }) => {
    console.log(`listening at: ${url}`);
  })
  .catch((err) => {
    console.log(err);
  });
