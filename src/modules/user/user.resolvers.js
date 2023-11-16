import { GraphQLError } from 'graphql';

export const users = [
  {
    id: 1,
    username: 'alex',
    age: 21
  }
]

export default {
  Query: {
    user: async () => {
      try {
        return users;
      } catch (error) {
        return new GraphQLError('User is not authenticated', {
          extensions: {
            code: 'UNAUTHENTICATED',

            http: { status: 401 },
          },
        });
      }
    },
  },
};