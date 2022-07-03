import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBook } from '../redux/bookSlice';
const EditForm = () => {
    const {state} = useLocation();
    const navigate = useNavigate()
   
    const [name, setName] = useState(state.name)
    const [author, setAuthor] = useState(state.author);
    const dispatch = useDispatch()
   

    const handleSubmit = e => {
        e.preventDefault()

        dispatch(updateBook({id: state.id, name: name, author: author}))
        navigate('/show-books')
    }
    return (
        <>
             <form onSubmit={handleSubmit} style={{ width: '350px' }}>
                    <div className='my-3'>
                        <label className='form-label' htmlFor="book_name">Book Name</label>
                        <input defaultValue={state.name} onChange={(e) => setName(e.target.value)} className='form-control' type="text" placeholder='Name' id='book_name' />
                    </div>
                    <div className='my-3'>
                        <label className='form-label' htmlFor="author_name">Author Name</label>
                        <input defaultValue={state.author}onChange={(e) => setAuthor(e.target.value)} className='form-control' type="text" placeholder='Author' id='author_name' />
                    </div>
                    <input onClick={(e) => handleSubmit(e)} className='btn btn-primary' type="submit" value='Add Book' />
                </form>
        </>
    );
};

export default EditForm;