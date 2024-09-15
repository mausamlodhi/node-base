import cors from "cors";
import bodyParser from "body-parser";
import compression from "compression";
import express from "express";
import path from "path";
import model from "./models"
import routes from "./routes/index"
export default class Boostrap{
    constructor(app){
        this.app = app;
        this.middleware();
        this.connectDB();
        this.start();
        this.routes();
    }   
    middleware(){
        const {app} = this;
        app.use(cors());
        app.use(compression());
        app.use(bodyParser.urlencoded({extended:true}));
        app.use(bodyParser.json());
        app.use(express.static(path.join(__dirname,'public')))
    }
    connectDB(){
        const {sequelize} =  model;
        sequelize.authenticate().then(()=>{
            sequelize.sync();
            console.log("Database sync successfully")
        }).catch((error)=>{
            console.log(error);
        })
    }
    routes(){
        routes(this.app)
    }
    start(){
        const {app} = this;
        const port = app.get('port');
        const server = app.listen(port || 5050);
    }
}