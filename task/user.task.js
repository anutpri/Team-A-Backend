import Users from '../models/user.schema.js';

export async function getUser(user) {
    try {
        const userData = await Users.find({}).exec();
        console.log(userData);
        return userData;

      } catch (err) {
        console.error(err);
      }
    }
    
// export async function createUser(User) {

// }