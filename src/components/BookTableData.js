import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBook } from '../redux/bookSlice';

const BookTableData = ({book}) => {
    const {id, name, author} = book;

    const dispatch = useDispatch()

    return (
        <>
            <tr>
                <th scope="row">{id}</th>
                <td>{name}</td>
                <td>{author}</td>
                <td className="">
                    <Link to="/edit-book" state={{id: id, name: name, author: author}} className="btn btn-primary mx-2">Edit</Link>
                    <button onClick={() => dispatch(deleteBook(id))} className="btn btn-danger mx-2">Delete</button>
                </td>
            </tr>
        </>
    );
};

export default BookTableData;