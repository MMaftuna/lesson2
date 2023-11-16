import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt'
import sequelize from '../config/sequelize.js';

const User = sequelize.define(
  'User',
  {
		userId: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false
		},
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
		tableName: 'users'
  },
);

User.beforeCreate(async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
});

User.prototype.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};


export default User;