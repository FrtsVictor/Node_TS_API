import { knex } from 'knex';

export const tableNames = {
    items: 'items',
    locations: 'locations',
    locationItems: 'location_items'
}

export type locationType = {
    id?: number,
    name: string,
    image: string,
    email: string,
    latitude: string,
    longitude: string,
    city: string,
    uf: string
}

export type itemType = {
    id?: number,
    title: string,
    image: string
}

export const connection = knex({
    client: 'pg',
    version: '9.5.6',
    connection: {
        host: '127.0.0.1',
        port: 5432,
        user: 'postgres',
        password: '123321',
        database: 'postgres'
    },
    useNullAsDefault: true
})