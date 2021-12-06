require('dotenv').config();

module.exports = {
    development: {
        client: 'pg',
        version: '9.5.6',
        connection: {
            host: '127.0.0.1',
            port: 5432,
            user: 'postgres',
            password: '123321',
            database: 'postgres'
        },
        migrations: {
            directory: './src/database/migrations',
        },
        seeds: { directory: './src/database/seeds' },
    },
    testing: {
        client: 'pg',
        connection: process.env.DB_URL,
        migrations: {
            directory: './src/database/migrations',
        },
        seeds: { directory: './src/database/seeds' },
    },
    production: {
        client: 'pg',
        connection: process.env.DB_URL,
        migrations: {
            directory: './src/database/migrations',
        },
        seeds: { directory: './src/database/seeds' },
    },
};