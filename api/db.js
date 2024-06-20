const Sequelize = require('sequelize');
console.log(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_HOST);

const sequelize = new Sequelize({
    dialect: "mssql",
    server: 'DESKTOP-H4I7H1I',
    port: 31530,
    database: 'qrCode',
    username: 'sa',
    password: '123456789'
});

sequelize.sync({ force: false })
    .then(() => {
        console.log('Database synchronized');
    })
    .catch((error) => {
        console.error('Failed to synchronize database:', error);
    });


module.exports = sequelize;