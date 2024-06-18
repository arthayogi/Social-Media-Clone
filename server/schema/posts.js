const typeDefs = `#graphql
    type Posts {
        _id: ID 
        content: String
        tags: [String]
        imgUrl: String
        authorId: ID
        author: [Author]
        comments: [Comments]
        likes: [Likes]
        createdAt: String
        updatedAt: String
    }

    type Author {
        _id: ID
        username: String
    }

    type Comments {
        content: String
        username: String
        createdAt: String
        updatedAt: String
    }

    type Likes {
        username: String
        createdAt: String
        updatedAt: String
    }

    type Query {
        showNewestPosts: [Posts]
        showPostById(_id: ID!): [Posts]
        showPostWithUser(_id: ID!): [Posts]
    }

    input NewPost {
        authorId: ID!
        content: String
        tags: String
        imageUrl: String
    }

    input NewComment {
        _id: ID!
        content: String
        username: String
    }

    input NewLike {
        _id: ID!
        username: String
    }

    type Mutation {
        addPost(newPost: NewPost): String
        addComment(newComment: NewComment): Posts
        likePost(newLike: NewLike): Posts
    }
`;

module.exports = typeDefs
