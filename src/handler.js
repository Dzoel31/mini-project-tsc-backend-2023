const dataBook = require ('./data')

const addBook = (request, h) => {
    const {
        title,
        author,
        publisher,
        year,
    } = request.payload;
    
    const newBook = {
        title,
        author,
        publisher,
        year,
    };

    if (!title) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. Isikan Judul Buku!',
        });
        response.code(400);
        return response;
    }
    dataBook.push(newBook);
    const response = h.response({
        status: 'success',
        message: 'Berhasil menambahkan buku',
        data: {
            ...dataBook
        }
    });
    response.code(201);
    return response;

};

const getAllBooks = (request, h) => {
    const response = h.response({
        status: 'success',
        data: {
            books: dataBook,
        }
    });
    response.code(200);
    return response;
};

const editBook = (request, h) => {
    const index = parseInt(request.params.index);

    const {title, author, publisher, year} = request.payload;

    if (index >= 0 && index < dataBook.length) {
        dataBook[index] = {
            ...dataBook[index],
            title,
            author,
            publisher,
            year,
        };
        const response = h.response({
            status: 'success',
            message: 'Data buku berhasil diperbarui',
        });
        response.code(200);
        return response;
    }
    const response = h.response({
        status: 'fail',
        message: `Tidak ada data pada indeks-${index}`,
    });
    response.code(400);
    return response;
};

const deleteBook = (request, h) => {
    const index = parseInt(request.params.index)

    if (isNaN(index) || index < 0 || index >= dataBook.length) {
        const response = h.response({
            status: 'fail',
            message: `Tidak ada data pada indeks-${index}`,
        });
        response.code(404);
        return response;
    }
    const deletedBook = dataBook[index]
    dataBook.splice(index, 1);
    const response = h.response({
        status: 'success',
        message: `Buku berjudul ${deletedBook.title} dihapus`,
    });
    response.code(200);
    return response; 
};

module.exports = {
    addBook, 
    getAllBooks, 
    editBook, 
    deleteBook
};