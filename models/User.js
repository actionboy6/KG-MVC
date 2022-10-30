const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class User extends Model {

}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            //TO-DO create hooks to crypt and decrypt and set minimum length for password.
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'User',
    },
);

module.exports = User;