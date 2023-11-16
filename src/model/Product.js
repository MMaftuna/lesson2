import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';
import sequelize from '../config/sequelize.js';

const Product = sequelize.define(
  'Product',
  {
    productId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    tableName: 'products',
  },
);

export default Product;
