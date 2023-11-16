import { users } from "../user/user.resolvers.js";
export const books = [
    {
        id: 1,
        title: '2 eshik orasi'
    },
    {
        id: 2,
        title: '4 eshik orasi'
    },
    {
        id: 3,
        title: '6 eshik orasi'
    }
]

export default {
    Query: {
        books: function() {
            try {
                const data = books.map( b => {
                    const user = users.find(u => u.id == b.id);

                    b.author = user;
                    return b;
                })

                return data
            } catch (error) {
                return new GraphQLError('Internal Server Error', {
                    extensions: {
                      code: 'InternalServerError',
          
                      http: { status: 500 },
                    },
                  });
            }
        }
    }
}