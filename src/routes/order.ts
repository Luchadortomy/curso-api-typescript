import {Router} from 'express'; //solo pueden acceder personas con sesion activa, que tenga un jtwt valido
import {getItems} from "../controllers/order";
import {checkJwt} from "../middleware/session";

const router = Router();

router.get("/", getItems, checkJwt );

export { router };