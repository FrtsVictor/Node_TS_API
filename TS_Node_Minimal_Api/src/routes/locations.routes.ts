import express, { Router } from 'express';
import { connection, itemType, tableNames } from '../database/connection';

const locationsRouter = Router();

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
    } = req.body;

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

    const savedLocationId = await transaction(tableNames.locations)
        .insert(newLocation)
        .returning('id');

    const locationItems = items.map(async (item_id: number) => {
        const selectedItem: itemType = await transaction(tableNames.items).where('id', item_id).first();
        
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", selectedItem)
        await validateItemExist(selectedItem);

        return {
            item_id,
            location_id: savedLocationId[0]
        }
    });

    console.log(locationItems)

    await transaction(tableNames.locationItems).insert(locationItems);
    await transaction.commit();

    return res.json({
        id: savedLocationId[0],
        ...newLocation, items
    })
})


const validateItemExist = async (selectedItem: itemType) => {
    if (!selectedItem) return  null;
    //response.status(400).json({ message: 'Item not found.' });
}

export default locationsRouter;