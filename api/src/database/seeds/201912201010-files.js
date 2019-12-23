const date = new Date();

const file = [
  {
    id: 1,
    name: 'rocketseat.jpeg',
    path: 'example/rocketseat.jpeg',
    type: 'banner',
    created_at: date,
    updated_at: date,
  },
  {
    id: 2,
    name: 'vuejs.jpeg',
    path: 'example/vuejs.jpeg',
    type: 'banner',
    created_at: date,
    updated_at: date,
  },
  {
    id: 3,
    name: 'rsxp.svg',
    path: 'example/rsxp.svg',
    type: 'banner',
    created_at: date,
    updated_at: date,
  },
];

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert('files', file, {});
    await queryInterface.sequelize.query(
      `ALTER SEQUENCE "files_id_seq" RESTART WITH ${file.length + 1}`
    );
  },
  down: queryInterface => queryInterface.bulkDelete('files', null, {}),
};
