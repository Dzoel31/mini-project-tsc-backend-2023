const {
    addBook,
    getAllBooks,
    editBook,
    deleteBook,
} = require ('./handler');

const routes = [
    {
        method: 'POST',
        path: '/addBook',
        handler: addBook,
    },
    {
        method: 'GET',
        path: '/getBooks',
        handler: getAllBooks,
    },
    {
        method: 'PUT',
        path: '/editBook/{index}',
        handler: editBook,
    },
    {
        method: 'DELETE',
        path: '/deleteBook/{index}',
        handler: deleteBook,
    }
]

module.exports = routes;