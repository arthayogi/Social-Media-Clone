const { DB } = require("../config/mongodbConnection");
const validator = require("validator");
const { hashPassword, comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { ObjectId } = require("mongodb");
const collection = DB.collection("users");

class UserModel {
  static async getUser() {
    const result = await collection.find().toArray();
    return result;
  }

  static async searchUserByUsername({input}) {
    // console.log(input);

    const regex = new RegExp(input, "i");

    const result = await collection
      .find({
        $or: [
          {
            username: {
              $regex: regex,
            },
          },
          {
            name: {
              $regex: regex,
            },
          },
        ],
      })
      .toArray();
      // console.log(result);

    if (result.length === 0) throw new Error("User not found");

    return result;
  }

  static async searchUserById({ _id }) {
    // console.log(_id);
    const result = await collection.findOne({
      _id: new ObjectId(_id),
    });

    if (result.length === 0) throw new Error("User not found");

    return result;
  }

  static async getUserWithFollower({_id}) {
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
            from: "follows",
            localField: "followerId",
            foreignField: "_id",
            as: "follower",
          },
      },
      {
        $project:
          {
            "follower.followingId": 0,
          },
      },
      {
        $lookup:
          {
            from: "follows",
            localField: "followingId",
            foreignField: "_id",
            as: "following",
          },
      },
      {
        $project:
          {
            "following.followerId": 0,
          },
      },
    ]).toArray()

    console.log(result);

    return result
  }

  static async register(args) {
    const username = args.newUser.username;
    const email = args.newUser.email;
    const password = args.newUser.password;
    const findUsername = await collection.findOne({ username: username }); //username: "mail"
    const findEmail = await collection.findOne({ email: email }); //email: "mail@mail.com"

    //==validasi username unique==
    if (findUsername) throw new Error("Username must be unique");

    //==validasi username require==
    if (!username) throw new Error("Username required");

    //==validasi email unique==
    if (findEmail) throw new Error("Email must be unique");

    //==validasi email require==
    if (!email) throw new Error("Email required");

    //==validasi email format==
    const check = validator.isEmail(email);
    if (check === false) throw Error("Email format incorrect");

    //==validasi password require==
    if (!password) throw new Error("Password required");

    //==validasi password length==
    if (password.length < 5)
      throw new Error("Password length must be more than 5");

    const result = await collection.insertOne({
      ...args.newUser,
      password: hashPassword(args.newUser.password),
    });
    args.newUser._id = result.insertedId;
    args.newUser.password = hashPassword(args.newUser.password);
    return "Register success";
  }

  static async login(args) {
    try {
      const email = args.newLogin.email;
      const password = args.newLogin.password;
      const user = await collection.findOne({ email: email });
      if (!email) throw new Error("Email/Password invalid");

      const validate = comparePassword(password, user.password);
      if (!validate) throw new Error("Email/Password invalid");

      const token = {
        accessToken: signToken({
          id: user._id,
          email: user.email,
        }),
      };
      // console.log(token, "hehehe");
      return token;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserModel;
