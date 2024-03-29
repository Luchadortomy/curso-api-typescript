import { Request, Response } from 'express'
import {handleHttp} from '../utils/error.handle';
import dbConnect from '../config/mongo';

const getItem = (req: Request, res: Response) => {
    try{
    } catch(e){
        handleHttp(res,"ERROR_GET_BLOG")
    }
};

const getItems = (req: Request, res: Response) => {
    try{
    } catch(e){
        handleHttp(res,"ERROR_GET_BLOG")
    }
}

const updateItem = (req: Request, res: Response) => {
    try{
    } catch(e){
        handleHttp(res,"ERROR_UPDATE_BLOG")
    }
}

const postItem = ( {body}: Request, res: Response) => {
    try{
        res.send(body);
    } catch(e) {
        handleHttp(res,"ERROR_POST_BLOG")
    }
}

const deleteItem = (req: Request, res: Response) => {
    try{
    } catch(e){
        handleHttp(res,"ERROR_DELETE_BLOG")
    }
}

export {getItem, getItems, updateItem, postItem, deleteItem}