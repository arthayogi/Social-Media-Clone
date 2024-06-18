// const redis = require("../config/redis,js")
const PostModel = require("../models/post")

const resolvers = {
    Query: {
        showNewestPosts: async (_,__, contextValue) => {
            await contextValue.authentication()
            // console.log(contextValue.authentication);
            // const cache = await redis.get("posts")
            // if(cache) {
                // return JSON.parse(cache)
            // }

            const data = await PostModel.showNewestPost()
            // await redis.set("posts", JSON.stringify(data))
            return data
        },

        showPostById: async (_, args, contextValue) => {
            // console.log(contextValue);
            await contextValue.authentication()
            // const cache = await redis.get("posts")
            // if(cache) {
            //     return JSON.parse(cache)
            // }
            const data = await PostModel.showPostById(args)
            // await redis.set("posts", JSON.stringify(data))
            return data
        },

        showPostWithUser: async (_, args, contextValue) => {
            await contextValue.authentication()
            // const cache = await redis.get("posts")
            // if(cache) {
            //     return JSON.parse(cache)
            // }
            const data = await PostModel.showPostWithUser(args)
            
            // await redis.set("posts", JSON.stringify(data))
            return data
        }
    },
    Mutation: {
        addPost: async (_,args, contextValue) => {
            await contextValue.authentication()
            try {
                const result = await PostModel.addPost(args)
                return result

            } catch (error) {
                throw (error)
            }
        },

        addComment: async (_,args, contextValue) => {
            await contextValue.authentication()
            try {
                const result = await PostModel.addComment(args)
                return result
            }catch (error) {
                throw (error)
            }
        },

        likePost: async (_,args, contextValue) => {
            await contextValue.authentication()
            try {
                const result = await PostModel.likePost(args)
                return result
            } catch (error) {
                throw (error)
            }
        }
    }
}

module.exports = resolvers