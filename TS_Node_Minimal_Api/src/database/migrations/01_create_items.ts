import { Knex } from 'knex';
import { tableNames } from '../connection'

export async function up(knex: Knex) {
    return knex.schema.createTable(tableNames.items, table => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('image').notNullable();
    });    
}

export async function down(knex: Knex) {
    return knex.schema.dropTableIfExists(tableNames.items);
}