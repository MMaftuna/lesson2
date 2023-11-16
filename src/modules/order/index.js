import { readFileSync } from 'fs'
import { resolve } from 'path'

import resolvers from './order.resolver.js'
const schema = readFileSync(resolve('src', 'modules', 'order/order.schema.gql'), 'utf-8')


export default {
	resolvers,
	typeDefs: schema,
}
