import models from "../models";
import path  from "path";

const {media} = models;
export default {
    async createFile({params,file}){
        try{
            const mediaType = params.mediaType;
            const mediaFor = params.mediaFor;
            const imagePath = path.join(__dirname,`../../${file.path}`);
            const mediaData = {
                name:file.filename || file.originalname,
                basePath:file.path,
                imagePath,
                mediaFor,
                mediaType
            }
            const result = await media.create(mediaData);
            return result; 
        }catch(error){
            console.log(error)
        }
    }
}