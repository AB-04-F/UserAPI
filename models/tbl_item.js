const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tbl_item', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        user_name: {
            type: DataTypes.STRING(250),
            allowNull: false
        },
        password: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        item_name: {
            type: DataTypes.STRING(250),
            allowNull: false
        },
        item_price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        last_logged_in: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: Sequelize.Sequelize.fn('current_timestamp')
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'tbl_item',
        timestamps: false,
        indexes: [{
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
                { name: "id" },
            ]
        }, ]
    });
};