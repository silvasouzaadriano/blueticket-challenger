const date = new Date();

const description =
  'O Community Challenge é uma competição global criada pelo Developer Circles from Facebook. Seu desafio é criar um software que utilize pelo menos uma das três tecnologias: React360, Spark AR ou Jogos em HTML5.\n';

const location = 'Av. Paulista, 1234';

const events = [
  {
    id: 1,
    title: 'Rocketseat - React Native',
    description,
    location,
    date: '2020-01-11T18:00:00.000Z',
    owner_id: 1,
    banner_id: 1,
    updated_at: date,
    created_at: date,
    canceled_at: null,
  },
  {
    id: 2,
    title: 'Vue.js summit 2019',
    description,
    location,
    date: '2020-01-12T18:00:00.000Z',
    owner_id: 43,
    banner_id: 2,
    updated_at: date,
    created_at: date,
    canceled_at: null,
  },
  {
    id: 3,
    title: 'RSXP - Rocketseat Experience 2020',
    description,
    location,
    date: '2020-02-13T18:00:00.000Z',
    owner_id: 27,
    banner_id: 3,
    updated_at: date,
    created_at: date,
    canceled_at: null,
  },
];

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert('events', events, {});
    await queryInterface.sequelize.query(
      `ALTER SEQUENCE "events_id_seq" RESTART WITH ${events.length + 1}`
    );
  },
  down: queryInterface => queryInterface.bulkDelete('events', null, {}),
};
