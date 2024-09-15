import express  from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.set('port',process.env.PORT || 5000);
const bootstrap = new Boostrap(app)