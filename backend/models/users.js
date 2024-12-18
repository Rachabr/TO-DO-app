import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const Users = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

Users.statics.signup = async function (email, password) {
  if (!email || !password) {
    throw Error("all fields must be filed");
  }
  if (!validator.isEmail(email)) {
    throw Error("the email is not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("weak password");
  }
  const exist = await this.findOne({ email });
  if (exist) {
    throw Error("email already exists!");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};


Users.statics.login = async function(email, password){
    if (!email || !password) {
        throw Error("all fields must be filed");
      }
    
    const user = await this.findOne({email})

    if(!user){
        throw Error("incorrect email")
    }
    console.log(user)
    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error("incorrect password")
    }
    return user
}

const model = mongoose.model("users", Users);

export default model;
