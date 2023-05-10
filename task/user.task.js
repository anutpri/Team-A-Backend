import User from '../models/user.schema.js';

export async function getUser() {
    const userData = await User.find({}).exec();
    return userData;
}

export async function createUser(User) {

}