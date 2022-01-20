import express, { Router, Response } from 'express';
import { connection, ItemType, tableNames } from '../database/connection';

const locationsRouter = Router();

type CreateLocation = {
    name: string,
    image: string,
    email: string,
    latitude: number,
    longitude: number,
    city: string,
    uf: string,
    items: number[]
}

locationsRouter.post('/', async (req, res) => {
    const {
        name,
        image,
        email,
        latitude,
        longitude,
        city,
        uf,
        items
    }: CreateLocation = req.body;

    const newLocation = {
        name,
        image,
        email,
        latitude,
        longitude,
        city,
        uf
    }
    const transaction = await connection.transaction();

    const location_id = await transaction(tableNames.locations)
    .insert(newLocation)
    .returning('id');


    const locationItems = items
        .map((item_id: number) => {
            const selectedItem = transaction(tableNames.items).where('id', item_id).first();

            if (!selectedItem) {
                return res.status(400).json({ message: 'Item not found.' });
            }

            return {
                item_id,
                location_id : location_id[0]
            }
        });

    await transaction(tableNames.locationItems).insert(locationItems);

    await transaction.commit();

    return res.json({
        id: location_id,
        ...newLocation
    });
});

export default locationsRouter;
