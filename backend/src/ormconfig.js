module.exports = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'sua_senha',
    database: 'damwatch',
    synchronize: true,
    logging: true,
    entities: ['dist/**/*.entity.js'],
    migrations: ['src/migrations/**/*.js'],
    subscribers: ['src/subscribers/**/*.js'],
};