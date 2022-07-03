import { createSlice } from '@reduxjs/toolkit'


const initialValue = {
    books: [
        { id: 1, name: 'Love Bangladesh', author: "Jahid Hasan" },
        { id: 2, name: 'Love You', author: "Rasel" },
    ]
}


const bookSlice = createSlice({
    name: "books",
    initialState: initialValue,
    reducers: {
        showBooks: state => state,

        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        updateBook: (state, action) => {
            const { id, name, author } = action.payload

            const isBookExist = state.books.filter(book => book.id === id)

            // // const isBookExist = state.books.filter(book => book.id === id)
            // console.log(state.books)
            // // const isBookExist = state.books.find(book => book);
            // // console.log(isBookExist);

            if (isBookExist) {
                isBookExist[0].name = name;
                isBookExist[0].author = author;

            }
        },
        deleteBook: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter(book => book.id !== id)
        }
    }
})


export const { showBooks, addBook, updateBook, deleteBook } = bookSlice.actions


export default bookSlice.reducer