import { Knex } from 'knex';
import { tableNames } from '../connection';

export const seed = async (knex: Knex) => {
    await knex(tableNames.items).insert([
        { title: "Papers", image: 'papers.jpg' },
        { title: "Books", image: 'books.jpg' },
        { title: "Eletronics", image: 'eletronics.jpg' },
        { title: "Pet stuffs", image: 'pets.jpg' },
        { title: "Drinks", image: 'drinks.jpg' },
        { title: "Notebooks", image: 'notebooks.jpg' },
        { title: "Others", image: 'others.jpg' },
    ])
}
