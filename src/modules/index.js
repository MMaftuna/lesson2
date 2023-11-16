import { makeExecutableSchema } from "@graphql-tools/schema";

import User from './user/index.js';
import Book from './book/index.js';
import Order from "./order/index.js";


export default makeExecutableSchema({
	typeDefs: [User.typeDefs, Book.typeDefs, Order.typeDefs],
	resolvers: [User.resolvers, Book.resolvers, Order.resolvers] 
})
