import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

const db = {};
const sequelize = new Sequelize('test','root','',{
    host:'localhost',
    dialect:'mysql'
});
fs.readdirSync(__dirname)
.filter((file)=>file.indexOf!=='.' && file!=='index.js')
.forEach((file)=>{
    const modal = require(path.join(__dirname,file))(sequelize,Sequelize.DataTypes);
    db[modal.name] = modal
});
Object.keys(db).forEach((fileName)=>{
    if(db[fileName].associate){
        db[fileName].associate = associate(db);
    }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;