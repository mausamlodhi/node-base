import { Router, response } from "express";
import media from './media.route.js'
import httpStatus from "http-status";

const router = Router();
const register = (app)=>{
    app.use(router);
    router.use('/api',[
        media,
    ]);
    app.use((error,req,res,next)=>{
        if(error){
            response.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                success:false,
                message:'Internal server error',
                error,
                data:null
            })
        }
    })
}
export default register;