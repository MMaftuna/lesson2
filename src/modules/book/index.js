import { readFileSync } from 'fs'
import { resolve } from 'path'

import resolvers from './book.resolver.js'
const schema = readFileSync(resolve('src', 'modules', 'book/book.schema.gql'), 'utf-8')


export default {
	resolvers,
	typeDefs: schema,
}
