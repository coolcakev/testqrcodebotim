const Sequelize = require('sequelize');
console.log(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_HOST);

const sequelize = new Sequelize({
    dialect: "mssql",
    server: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

sequelize.sync({ force: false })
    .then(() => {
        console.log('Database synchronized');
    })
    .catch((error) => {
        console.error('Failed to synchronize database:', error);
    });


module.exports = sequelize;