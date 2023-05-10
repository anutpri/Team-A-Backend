import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    },
  fullname: {
      type: String,
      },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
    },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
    },
  password: {
    type: String,
    required: true,
    
    },

});

const User = mongoose.model('User', userSchema);

export default User;