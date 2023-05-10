import User from '../models/user.schema.js';

export async function getUser() {
    try {
        const userData = await User.find({}).exec();
        return userData;
      } catch (err) {
        console.error(err);
      }
    }
    
export async function createUser(User) {

}