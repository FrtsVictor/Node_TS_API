import express, { Router } from 'express';
import itemsRouter from './items.routes';
import locationsRouter from './locations.routes';
import path from 'path';

export const routes = Router();

routes.use('/items', itemsRouter);
routes.use('/locations', locationsRouter);
routes.use('/uploads', express.static(path.resolve(__dirname, '..', '..', 'uploads')));

