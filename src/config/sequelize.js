import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  'postgres://postgres:111133@localhost:5432/dbname',
  { logging: false, dialect: 'postgres' },
);

;(async function () {
  try {
    await sequelize.authenticate();
    console.log('db connection');
  } catch (error) {
    console.log('db error, ', error.message);
  }
})();


export default sequelize;