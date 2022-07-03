import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../redux/bookSlice';

const AddForm = () => {
    const [name, setName] = useState('')
    const [author, setAuthor] = useState('');
    const {books} = useSelector(state => state.books)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    
    const handleSubmit = e => {
        e.preventDefault()

        dispatch(addBook({id: books.length + 1, name: name, author: author}));
        navigate('/show-books')
    }
    return (
        <>
            <form onSubmit={handleSubmit} style={{ width: '350px' }}>
                <div className='my-3'>
                    <label className='form-label' htmlFor="book_name">Book Name</label>
                    <input required onChange={(e) => setName(e.target.value)} className='form-control' type="text" placeholder='Name' id='book_name' />
                </div>
                <div className='my-3'>
                    <label className='form-label' htmlFor="author_name">Author Name</label>
                    <input required onChange={(e) => setAuthor(e.target.value)} className='form-control' type="text" placeholder='Author' id='author_name' />
                </div>
                <input onClick={(e) => handleSubmit(e)} className='btn btn-primary' type="submit" value='Add Book' />
            </form>
        </>
    );
};

export default AddForm;