import { users } from "../user/user.resolvers.js";
import { books } from "../book/book.resolver.js";

const orders = [
    {
        id: 1,
        books: [1],
        author: 1
    }
]

export default {
    Query: {
        orders: function() {
            try {
                const data = orders.map( o => {
                    const allBooks = []; 

                    o.author = users.find(u => u.id == o.author);

                    for(let i = 0; i < o.books.length; i++) {
                        const book = books.find( b => b.id == o.books[i]);
                        // book.author = o.author;
                        allBooks.push(book);
                    };


                    o.books = allBooks; 
                    console.log(o);

                    return o;
                })

                return  data;
            } catch (error) {
                console.log('a');
            }
        }
    }
}