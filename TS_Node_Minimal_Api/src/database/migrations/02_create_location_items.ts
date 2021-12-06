import { Knex } from 'knex';
import { tableNames } from '../connection'

export async function up(knex: Knex) {
    return knex.schema.createTable(tableNames.locationItems, table => {
        table.increments('id').primary();
        table.integer('location_id')
            .notNullable()
            .references('id')
            .inTable('locations');

        table.integer('item_id')
            .notNullable()
            .references('id')
            .inTable('items')
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTableIfExists(tableNames.locationItems);
}