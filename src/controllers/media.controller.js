import multer from "multer";
import path from "path";
import respositories from "../repositories";
import httpStatus from "http-status";
const { mediaRepository } = respositories;
const storage = multer.diskStorage({
    destination: async(req,file,cb)=>{
        const { mediaType, mediaFor} = req.params;
        cb(null,`/public/uploads`)
    }
});
console.log("Storage :--",storage)
const uploadFiles = multer({
    storage,
    fileFilter:(req,file,callBack)=>{
        const ext = path.extname(file.originalname);
        let fileFormate = [];
        if(req.params.mediaType==='image'){
            fileFormate = ['.img','.jpeg','.jpg','.gif']
        }else if(req.params.mediaType==='audio'){
            fileFormate = ['.mp3','.aac','.m4a']
        }else if(req.params.mediaType === 'video'){
            fileFormate = ['.mp4','.mkv']
        }else if(req.params.mediaType==='file'){
            fileFormate = ['.doc','.pdf']
        }else if(req.params.mediaType === 'media'){
            fileFormate = ['.doc','.pdf','mkv','mp4','.mp3','.aac','.img','.jpg','.jpeg','.gif']
        }
        if(!fileFormate.indexOf(ext.toLocaleLowerCase())=== -1){
            return callBack(new Error(`Allowed file formates ${fileFormate.toString()}`))
        }
        callBack(null,true)
    }
});

export default {
    async uploadMedia(request,response,next){
        try{
            const {params} = request;
            const { mediaType, mediaFor } = params;
            uploadFiles.single('image')(request,response,async(error)=>{
                if(!error){
                    const result = await mediaRepository.createFile(request);
                    response.status(httpStatus.OK).json({
                        data:result,
                        message:'Document upload success',
                        success:true    
                    })
                }else{
                    next();
                }
            })
        }catch(error){
            console.log(error);
        }
    }
}