import User from "./User.js";
import Product from "./Product.js";
import sequelize from "../config/sequelize.js";

User.hasMany(Product, {
	foreignKey: 'userId'
});

Product.belongsTo(User, {
  foreignKey: 'userId',
});


sequelize.sync()

export {
	User,
	Product
}