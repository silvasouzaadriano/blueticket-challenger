import request from 'supertest';
import app from '../../src/app';
import factory from '../factories';
import truncate from '../utils/truncate';

describe('Users', () => {
  beforeEach(async () => {
    await truncate();
  });
  /* CREATE USER */
  it('Should be able register', async () => {
    const user = await factory.attrs('User');
    const response = await request(app)
      .post('/users')
      .send(user);
    expect(response.body).toHaveProperty('token');
  });
  it('Should not be able register when user exist', async () => {
    await factory.create('User', {
      email: 'silva.souza.adriano@gmail.com',
    });
    const newUser = await factory.attrs('User', {
      email: 'silva.souza.adriano@gmail.com',
    });
    const response = await request(app)
      .post('/users')
      .send(newUser);
    expect(response.body.error).toBe('Esse email já foi registrado!');
  });
  it('Should not be able register when not send name', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        email: 'silva.souza.adriano@gmail.com',
        password: '123456',
      });
    expect(response.body.error).toBe('nome é um campo obrigatório');
  });
  it('Should not be able register when not send email', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Adriano',
        password: '123456',
      });
    expect(response.body.error).toBe('e-mail é um campo obrigatório');
  });
  it('Should not be able register when send invalid email', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Adriano',
        email: 'Adrianosouza',
        password: '123456',
      });
    expect(response.body.error).toBe('email must be a valid email');
  });
  it('Should not be able register when not send password', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Adriano',
        email: 'silva.souza.adriano@gmail.com',
      });
    expect(response.body.error).toBe('senha é um campo obrigatório');
  });
  it('Should not be able register when send password with less 6 characters', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Adriano',
        email: 'silva.souza.adriano@gmail.com',
        password: '123',
      });
    expect(response.body.error).toBe(
      'A senha deve ter entre 6-10 caracteres'
    );
  });
  it('Should not be able register when send password with more 10 characters', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Adriano',
        email: 'silva.souza.adriano@gmail.com',
        password: '12345678910',
      });
    expect(response.body.error).toBe('A senha deve ter entre 6-10 caracteres');
  });
  /* UPDATE USER */
  it('Should be able update the user', async () => {
    const user = await factory.create('User', {
      email: 'test@brainmind.com.br',
      password: '123123',
    });

    const response = await request(app)
      .put(`/users`)
      .send({
        name: 'Adriano',
        email: 'test@brainmind.com.br',
      })
      .set('Authorization', `Bearer ${user.generateToken()}`);
    expect(response.body.name).toBe('Adriano');
  });

  it('Should not update with user already exist', async () => {
    const user = await factory.create('User');
    const user2 = await factory.create('User', {
      email: 'test@brainmind.com.br',
    });

    const response = await request(app)
      .put(`/users`)
      .send({
        name: 'Adriano',
        email: user2.email,
      })
      .set('Authorization', `Bearer ${user.generateToken()}`);
    expect(response.status).toBe(422);
  });

  it('Should not update the user when send oldPassword but not password', async () => {
    const user = await factory.create('User');

    const response = await request(app)
      .put(`/users`)
      .send({
        oldPassword: '123456',
      })
      .set('Authorization', `Bearer ${user.generateToken()}`);
    expect(response.body.error).toBe('Você deve informar a senha');
  });

  it('Should not update the user when not confirm the password', async () => {
    const user = await factory.create('User');

    const response = await request(app)
      .put(`/users`)
      .send({
        oldPassword: '123456',
        password: '654321',
      })
      .set('Authorization', `Bearer ${user.generateToken()}`);
    expect(response.body.error).toBe('Você deve confirmar a senha');
  });

  it('Should not update the user when not sent e-mail', async () => {
    const user = await factory.create('User');

    const response = await request(app)
      .put(`/users`)
      .send({ name: 'Adriano' })
      .set('Authorization', `Bearer ${user.generateToken()}`);
    expect(response.body.error).toBe('e-mail é um campo obrigatório');
  });

  it('Should not update the user when send wrong oldPassword', async () => {
    const user = await factory.create('User', {

      password: 'testpassword',
    });

    const response = await request(app)
      .put(`/users`)
      .send({
        name: 'Adriano',
        email: user.email,
        oldPassword: '123456',
        password: '654321',
        confirmPassword: '654321',
      })
      .set('Authorization', `Bearer ${user.generateToken()}`);
    expect(response.body.error).toBe('Senha não corresponde');
  });
});
