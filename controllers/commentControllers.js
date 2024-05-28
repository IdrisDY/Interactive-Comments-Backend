const mongoose = require("mongoose");

const {commentOrReply,userModel} = require("../models/commentsModel");
const getAllComments = async (req, res) => {
  const comments = await commentOrReply.find({});
  const userInfo = await userModel.find({})

  const data = [{comments},{userInfo}]

  return res.json(data);
};
const createReply = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such comments" });
    }
    console.log(id);
    console.log(req.body);
    // const reply = await commentsModel.updateOne(
    //   { _id: id },
    //   { $push: { replies: req.body } },
    //   { new: true }
    // );
    // if (!reply) {
    //   return res.status(404).json({ error: "Comment not found" });
    // }    // res.json(reply);

    const reply = await commentOrReply.create(req.body)
    res.json(reply)

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = {
  getAllComments,
  createReply,
};
