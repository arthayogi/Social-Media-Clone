const { ObjectId } = require("mongodb");
const { DB } = require("../config/mongodbConnection");
// const redis = require("../config/redis,js");
const collection = DB.collection("posts");
// const redis = require("../config/redis");

class PostModel {
  static async addPost(args) {
    const content = args.newPost.content;

    if (!content) throw new Error("Please write something");

    const result = await collection.insertOne({
      ...args.newPost,
      authorId: new ObjectId(args.newPost.authorId),
      comments: [],
      likes: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // await redis.delete("posts")

    return "Post Created";
  }

  static async addComment(args) {
    const content = args.newComment.content;
    const username = args.newComment.username;
    const postId = args.newComment._id

    if (!content) throw new Error("Please write something");
    if (!username) throw new Error("Username not found");

    const comment = {
      content,
      username,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    const data = await collection.updateOne(
      { _id: new ObjectId(postId)},
      { $push: {comments: comment}}
    )

    // console.log(data);

    const result = await collection.findOne({
      _id: new ObjectId(postId)
    })

    // await redis.delete("posts")

    return result;
  }

  static async showNewestPost() {
    const result = await collection
      .aggregate([
        {
          $sort: {
            createdAt: -1,
          },
        },
      ])
      .toArray();

    // console.log(result);

    return result;
  }

  static async showPostById({ _id }) {
    const result = await collection
      .find({
        _id: _id,
      })
      .toArray();

    if (result.length === 0) throw new Error("Post not found");

    return result;
  }

  static async likePost(args) {

    const username = args.newLike.username;
    const postId = args.newLike._id

    const post = await collection.findOne({
      _id: new ObjectId(postId),
      "likes.username": username
    })

    if(post) {
      throw new Error("User already liked the post")
    }

    const like = {
      username,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    await collection.updateOne(
      { _id: new ObjectId(postId) },
      { $push: { likes: like} }
    )

    const result = await collection.findOne({
      _id: new ObjectId(postId)
    })

    // await redis.delete("posts")

    return result
  }

  static async showPostWithUser({_id}) {
    const result = await collection.aggregate([
      {
        $match:
          {
            _id: new ObjectId(_id),
          },
      },
      {
        $lookup:
          {
            from: "users",
            localField: "username",
            foreignField: "authorId",
            as: "author",
          },
      },
      {
        $project:
          {
            "author.name": 0,
            "author.email": 0,
            "author.password": 0,
          },
      },
    ]).toArray()

    console.log(result);

    return result
  }
}

module.exports = PostModel;
