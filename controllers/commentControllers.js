const mongoose = require("mongoose");

const { commentOrReply, userModel } = require("../models/commentsModel");
const getAllComments = async (req, res) => {
  const comments = await commentOrReply.find({}).sort({ createdAt: -1 });
  const userInfo = await userModel.find({});
  const data = [{ comments }, { userInfo }];

  return res.json(data);
};
const createReply = async (req, res) => {
  try {
    // const { id } = req.params;
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //   return res.status(404).json({ error: "No such comments" });
    // }
    console.log(req.body);
 
    const reply = await commentOrReply.create(req.body);
    res.json(reply);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const updateReply = async (req, res) => {
  try {
    const { id } = req.params;

    console.log(req.body,'yeah');
 
    const reply = await commentOrReply.findOneAndUpdate({id:id}, {...req.body},{new:true})
    res.json(reply);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const deleteReply = async (req, res) => {
  try {
    const { id } = req.params;

    console.log(req.body);
 
    const reply = await commentOrReply.find({id:id});
    res.json(reply);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = {
  getAllComments,
  createReply,
  updateReply,
  deleteReply
};
