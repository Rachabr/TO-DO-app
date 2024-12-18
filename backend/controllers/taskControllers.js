import Taskes from "../models/taskes.js";
import mongoose from "mongoose";

// get all taskes

const gettaskes = async (req, res) => {
  const userId = req.user._id
  console.log(userId)
  const taskes = await Taskes.find({userId}).sort({ createdAt: -1 });
  res.status(200).json(taskes);
};

//get one task

const gettask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(401).json({ error: "id is invalid" });
  }
  const taskes = await Taskes.findById(id);

  if (!taskes) {
    return res.status(401).json({ error: "workout doesn't exist" });
  }

  res.status(200).json(workout);
};

//make a workout
const creattask = async (req, res) => {
  const { title, disc, category, priorety, status } = req.body;
  const userId = req.user._id
  console.log(userId)
 
  const emptyFeilds = []
  if(!title){
    emptyFeilds.push("title")
  }
  if(!disc){
    emptyFeilds.push("disc")
  }
  if(!category){
    emptyFeilds.push("category")
  }
  if(emptyFeilds.length > 0){
    res.status(400).json({error:"please fill all inputes", emptyFeilds})
  }
  try {
    const taskes = await Taskes.create({ title, disc, category, priorety, status, userId });
    res.status(200).json(taskes);
  } catch (error) {
    res.status(401).json({ error:error.message });
  }};

//delete a workout

const delettask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(401).json({ error: "id is invalid" });
  }

  const taskes = await Taskes.findOneAndDelete({ _id: id });

  if (!taskes) {
    return res.status(401).json({ error: "task doesn't exist" });
  }

  res.status(200).json(taskes);
};

//update a workout

const updatetask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(401).json({ error: "id is invalid" });
  }

  const taskes = await Taskes.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!taskes) {
    return res.status(401).json({ error: "taske doesn't exist" });
  }

  res.status(200).json(workout);
};

 
//exporting

export { creattask, gettaskes, gettask, delettask, updatetask };
