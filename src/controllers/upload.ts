import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import {registerUpload} from "../services/storage";
import {RequestExt} from "../interfaces/req-ext";
import {Storage} from "../interfaces/storage";
import {handleHttp} from "../utils/error.handle";

const getFile = async(req: RequestExt, res: Response) => {
  try {
    const {user, file} = req;
    const dataToRegister: Storage = {
      fileName: `${file?.filename}`,
      idUser: `${user?.id}`,
      path:`${file?.path}`,
    };
    const response = await registerUpload(dataToRegister);
    res.send("AQUI_DEBE_LLEGAR_FILE");
  } catch(e) {
    handleHttp(res, "ERROR_GET_BLOG");
  }
};

export {getFile};


