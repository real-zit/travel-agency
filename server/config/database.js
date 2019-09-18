const Sequelize = require('sequelize');
module.exports = new Sequelize('travelagency', 'root', '', {
    host: 'localhost',
    port: '3306',
    dialect:'mysql',
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:1000
    },
    define:{
        timestamps:false
    },
    operatorsAliases:false
})