import mongoose from 'mongoose';


const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, trim: true },
    username: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    birthdate: { type: String },
    weight: { type: String },
    height: { type: String }

});

const UserModel = mongoose.model('user', userSchema);

export default UserModel;