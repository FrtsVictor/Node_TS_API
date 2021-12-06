import { Knex } from 'knex';
import { tableNames } from '../connection'

export async function up(knex: Knex) {
    return knex.schema.createTable(tableNames.locations, table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('image').notNullable();
        table.string('email').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city').notNullable();
        table.string('uf').notNullable();

    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTableIfExists(tableNames.locations);
}