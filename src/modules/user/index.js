import { readFileSync } from 'fs'
import { resolve } from 'path'

import resolvers from './user.resolvers.js'
const schema = readFileSync(resolve('src', 'modules', 'user/user.schema.gql'), 'utf-8')


export default {
	resolvers,
	typeDefs: schema,
}
