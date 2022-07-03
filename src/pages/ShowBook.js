import BookTableData from "../components/BookTableData";
import {useSelector} from 'react-redux'
const ShowBook = () => {
    const {books} = useSelector(state => state.books)
    return (
        <section className="container">
            <h1 className="text-center">All Books</h1>

            <div className="table-responsive">
                <table className="table table-bordered border-primary">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Author</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                     { books.map(book => <BookTableData key={book.id} book={book}/>) }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ShowBook;