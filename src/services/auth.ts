import {Auth} from "../interfaces/auth.interface";
import {User} from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.hanlde";

const registerNewUser = async ({email, password, name}: User) => {
    const checkIs = await UserModel.findOne({email});
    if(checkIs) return "ALREADY_USER";
    const passHash = await encrypt(password) //todo 123456
    const registerNewUser = await UserModel.create({email, password:passHash, name});
    //todo 123456
    return registerNewUser
};

const loginUser = async ({email, password}:Auth) => {
    const checkIs = await UserModel.findOne({email});
    if(!checkIs) return "NOT_FOUND_USER";

    const passwordHash = checkIs.password; //encriptado
    const isCorrect= await verified(password, passwordHash);

    if(!isCorrect) return "PASSWORD_INCORRECTO";

    const token = generateToken(checkIs.email);
    const data = {
        token,
        user: checkIs,
    };
    return data;

};

export { registerNewUser, loginUser };