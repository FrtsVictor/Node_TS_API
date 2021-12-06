import { Router } from 'express';
import { connection, itemType, tableNames } from '../database/connection'


const itemsRouter = Router();

itemsRouter.get('/', async (req, res) => {
    const items: Array<itemType> = await connection(tableNames.items).select('*');
    const serializedItems = serializeItems(items);

    return res.json({ message: serializedItems });
})

const serializeItems = (items: Array<itemType>): Array<itemType> => items.map(item => {
    return {
        id: item.id,
        title: item.title,
        image: `http://localhost:3333/uploads/${item.image}`,
    }
})

export default itemsRouter;