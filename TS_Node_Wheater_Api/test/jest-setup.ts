import { SetupServer } from '@src/server';
import supertest from 'supertest';

//inicializar o server do supertest, inicializar em modo de test
beforeAll(() => {
    const server = new SetupServer();
    server.init();

    global.testRequest = supertest(server.getApp());
})