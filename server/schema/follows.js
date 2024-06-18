const typeDefs = `#graphql
    type Follows {
        _id: ID
        followingId: ID
        followerId: ID
        createdAt: String
        updatedAt: String
    }

    type Query {
        followingId(followerId: ID): [Follows]
        followerId(followingId: ID): [Follows]
    }

    input NewFollow {
        followingId: ID!
        followerId: ID!
    }

    type Mutation {
        createFollow(newFollow: NewFollow): Follows
    }
`

module.exports = typeDefs