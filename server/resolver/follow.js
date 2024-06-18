const FollowModel = require("../models/follow");

const resolvers = {
    Query: {
        followingId: async (_, args, contextValue) => {
            // console.log(args);
            await contextValue.authentication()
            const data = await FollowModel.followingId(args)
            console.log(data);
            return data
        },
        followerId: async (_, args, contextValue) => {
            await contextValue.authentication()
            const data = await FollowModel.followerId(args)
            return data
        }
    },
    Mutation: {
        createFollow: async (_,args, contextValue) => {
            const currentUser = await contextValue.authentication()
            // console.log(contextValue, "<<<<");
            const followerId = currentUser.id

            const { followingId } = args
            return await FollowModel.createFollow({
                followerId,
                followingId
            })
            
        }
    }
}

module.exports = resolvers