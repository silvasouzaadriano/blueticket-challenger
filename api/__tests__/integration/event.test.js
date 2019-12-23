import request from 'supertest';
// import { zonedTimeToUtc } from 'date-fns-timezone';
import { zonedTimeToUtc } from 'date-fns-tz';
import { addHours } from 'date-fns';
import app from '../../src/app';
import factory from '../factories';
import truncate from '../utils/truncate';

let i = 0;
describe('Event', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('Should be able create event', async () => {
    const user = await factory.create('User');
    const file = await factory.create('File');

    const response = await request(app)
      .post('/events')
      .set('Authorization', `Bearer ${user.generateToken()}`)
      .send({
        title: 'Vue.js summit 2019',
        description: 'O Community Challenge é uma competição global criada pelo Developer Circles from Facebook. Seu desafio é criar um software que utilize pelo menos uma das três tecnologias: React360, Spark AR ou Jogos em HTML5.\n',
        location: 'São Paulo/SP - Av. Paulista, 1234',
        date: '2019-12-31T18:00:00-03:00',
        owner_id: user.id,
        banner_id: file.id,
      });

    expect(response.status).toBe(201);
  });
  it('Should not be able create event when not send date', async () => {
    await truncate();

    const user = await factory.create('User', {
      email: 'silva.souza.adriano@gmail.com',
      password: '123321',
    });
    const file = await factory.create('File');

    const response = await request(app)
      .post('/events')
      .set('Authorization', `Bearer ${user.generateToken()}`)
      .send({
        title: 'Vue.js summit 2019',
        description: 'O Community Challenge é uma competição global criada pelo Developer Circles from Facebook. Seu desafio é criar um software que utilize pelo menos uma das três tecnologias: React360, Spark AR ou Jogos em HTML5.\n',
        location: 'São Paulo/SP - Av. Paulista, 1234',
        date: null,
        owner_id: user.id,
        banner_id: file.id,
      });


    expect(response.body.error).toBe('A data não pode ser em branco.');
  });
  it('Should not be able create event when send invalid date', async () => {
    const user = await factory.create('User');
    const file = await factory.create('File');

    const response = await request(app)
      .post('/events')
      .set('Authorization', `Bearer ${user.generateToken()}`)
      .send({
        title: 'Vue.js summit 2019',
        description: 'O Community Challenge é uma competição global criada pelo Developer Circles from Facebook. Seu desafio é criar um software que utilize pelo menos uma das três tecnologias: React360, Spark AR ou Jogos em HTML5.\n',
        location: 'São Paulo/SP - Av. Paulista, 1234',
        date: 'asdfasfd',
        owner_id: user.id,
        banner_id: file.id,
      });

    expect(response.status).toBe(500);
  });
  it('Should not be able create event when send past date', async () => {
    const user = await factory.create('User');
    const file = await factory.create('File');

    const response = await request(app)
      .post('/events')
      .set('Authorization', `Bearer ${user.generateToken()}`)
      .send({
        title: 'Vue.js summit 2019',
        description: 'O Community Challenge é uma competição global criada pelo Developer Circles from Facebook. Seu desafio é criar um software que utilize pelo menos uma das três tecnologias: React360, Spark AR ou Jogos em HTML5.\n',
        location: 'São Paulo/SP - Av. Paulista, 1234',
        date: '2018-12-31T18:00:00-03:00',
        owner_id: user.id,
        banner_id: file.id,
      });

    expect(response.body.error).toBe('Você não pode criar um evento para uma data que já passou!');
  });
  it('Should be able return date list', async () => {
    const user = await factory.create('User');

    const [, response] = await Promise.all([
      await request(app)
        .post('/events')
        .set('Authorization', `Bearer ${user.generateToken()}`)
        .send({
          date: '2019-12-31T18:00:00-03:00',
        }),
      await request(app)
        .get('/events')
        .set('Authorization', `Bearer ${user.generateToken()}`),
    ]);

    expect(Array.isArray(response.body)).toBeTruthy();
  });

  it('Should be able to destroy event', async () => {
    await truncate();
    const user = await factory.create('User');
    const file = await factory.create('File');

    const [, responseFind] = await Promise.all([
      await request(app)
        .post('/events')
        .set('Authorization', `Bearer ${user.generateToken()}`)
        .send({
          date: '2019-12-31T18:00:00-03:00',
        }),
      await request(app)
        .get('/events')
        .set('Authorization', `Bearer ${user.generateToken()}`),
    ]);

    console.log('Response = ' + responseFind)

    const response = await request(app)
      .delete(`/events/${responseFind.id}`)
      .set('Authorization', `Bearer ${user.generateToken()}`);

    expect(response.body.error).toBe('200');
  });


  it('Should not be able to destroy date when send id date unexist', async () => {
    const user = await factory.create('User');
    const response = await request(app)
      .delete(`/events/15456321`)
      .set('Authorization', `Bearer ${user.generateToken()}`);

    expect(response.body.error).toBe('Esse evento não existe!');
  });
});
