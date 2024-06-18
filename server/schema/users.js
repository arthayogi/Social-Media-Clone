const typeDefs = `#graphql
    type Users {
        _id: ID 
        name: String
        username: String
        email: String
        password: String
        follower: FollowerDetail
        following: FollowingDetail
    }

    type FollowerDetail {
        _id: ID
        followerId: ID
    }

    type FollowingDetail {
        _id: ID
        followingId: ID
    }

    type Token {
        accessToken: String
    }

    type UsersRegex {
        _id: ID
        name: String
        username: String
        email: String
    }

    type Query {
        getUser: [Users]
        searchUserByUsername(input: String): [UsersRegex]
        searchUserById(_id: ID!): Users
        getUserWithFollower(_id: ID!): [Users]
    }

    input NewUser {
        name: String!
        username: String!
        email: String!
        password: String!
    }

    input NewLogin {
        email: String!
        password: String!
    }

    type Mutation {
        register(newUser: NewUser): String
        login(newLogin: NewLogin): Token
    }
`;

module.exports = typeDefs
