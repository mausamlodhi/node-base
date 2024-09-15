module.exports = (sequelize,DataTypes)=>{
    const userDetails = sequelize.define(
        'userDetails',
        {
            email:{
                type:DataTypes.STRING(200),
                allowNull:false,
                trim:true
            },
            mobile:{
                type:DataTypes.STRING(10),
                allowNull:false,
                trim:true
            },
        }
    );
    userDetails.associate = (model)=>{
        userDetails.belongsTo(model.user,{
            foreignKey:'userId',
            as:'user'
        })
    }
}