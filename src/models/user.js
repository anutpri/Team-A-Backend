import mongoose from 'mongoose';


const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true,},
    fullname: { type: String, },
    email: { type: String, required: true, unique: true, trim: true },
    username: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },

});

const UserModel = mongoose.model('user', userSchema);

export default UserModel;