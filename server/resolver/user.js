const UserModel = require("../models/user")

const resolvers = {
    Query: {
        getUser: async (_,__,contextValue) => {
            await contextValue.authentication()
            const data = await UserModel.getUser();
            return data
        },

        searchUserByUsername: async (_, args, contextValue) => {
            await contextValue.authentication()
            // console.log(contextValue, "masuk");
            const data = await UserModel.searchUserByUsername(args)
            return data
        },

        searchUserById: async (_, args, contextValue) => {
            contextValue.authentication()
            const data = await UserModel.searchUserById(args)
            return data
        },

        getUserWithFollower: async (_, args, contextValue) => {
            contextValue.authentication()
            const data = await UserModel.getUserWithFollower(args)
            return data
        }
    },
    Mutation: {
        register: async (_,args) => {
            try {
                const result = await UserModel.register(args)
                return result
            } catch (error) {
                throw(error)
            }
        },

        login: async (_,args) => {
            try {
                const result = await UserModel.login(args)
                return result
            } catch (error) {
                throw(error)
            }
        }
    }
}

module.exports = resolvers