import request from 'supertest';
import app from '../../src/app';
import factory from '../factories';
import truncate from '../utils/truncate';

describe('Authenticate', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('Should be able authenticate', async () => {
    const user = await factory.create('User', {
      name: 'Pedro',
      password: '123123',
    });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '123123',
      });

    expect(response.body).toHaveProperty('token');
  });
  it('Should not be able authenticate when not send e-mail', async () => {
    const response = await request(app)
      .post('/sessions')
      .send({
        password: '123123',
      });

    expect(response.body.error).toBe('e-mail é um campo obrigatório');
  });
  it('Should not be able authenticate when send e-mail invalid', async () => {
    const response = await request(app)
      .post('/sessions')
      .send({
        email: 'adrianosouza',
        password: '123123',
      });

    expect(response.body.error).toBe('email must be a valid email');
  });
  it('Should not be able authenticate when user not exist', async () => {
    const response = await request(app)
      .post('/sessions')
      .send({
        email: 'silva.souza.adriano@gmail.com',
        password: '123123',
      });

    expect(response.body.error).toBe('Usuário não existe!');
  });
  it('Should not be able authenticate when not send password', async () => {
    const response = await request(app)
      .post('/sessions')
      .send({
        email: 'silva.souza.adriano@gmail.com',
      });

    expect(response.body.error).toBe('senha é um campo obrigatório');
  });
  it('Should not be able authenticate when send password invalid', async () => {
    await factory.create('User', {
      name: 'João Souza',
      email: 'demo@gmail.com',
      password: '123123',
    });
    const response = await request(app)
      .post('/sessions')
      .send({
        email: 'demo@gmail.com',
        password: '123456',
      });

    expect(response.body.error).toBe('Senha não combina!');
  });
});
