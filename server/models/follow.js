const { ObjectId } = require("mongodb");
const { DB } = require("../config/mongodbConnection");
const collection = DB.collection("follows");

class FollowModel {
    static async createFollow(followData) {
        console.log(followData);
        try {
            const insert = await collection.insertOne({
                followerId: new ObjectId(followData.followerId),
                followingId: new ObjectId(followData.followingId),
                createdAt: new Date(),
                updatedAt: new Date()
            })

            return collection.findOne({
                _id: new ObjectId(insert.insertedId)
            })
        } catch (error) {
            throw (error)
        }
    }

    static async followingId(args) {
        const result = await collection.find({
           followerId : new ObjectId(args.followerId)
        }).toArray()
        // console.log(args.followerId);
        console.log(result);

        return result
    }

    static async followerId(args) {
        const result = await collection.find({
            followingId: new ObjectId(args.followingId)
        }).toArray()

        return result

    }
}

module.exports = FollowModel