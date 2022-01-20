import { Router } from 'express';
import { connection, ItemType, tableNames } from '../database/connection'


const itemsRouter = Router();

itemsRouter.get('/', async (req, res) => {
    const items: Array<ItemType> = await connection(tableNames.items).select('*');
    const serializedItems = serializeItems(items);

    return res.json({ message: serializedItems });
})

const serializeItems = (items: Array<ItemType>): Array<ItemType> => items.map(item => {
    return {
        id: item.id,
        title: item.title,
        image: `http://localhost:3333/uploads/${item.image}`,
    }
})

export default itemsRouter;