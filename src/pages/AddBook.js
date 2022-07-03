import React, { useState } from 'react';
import AddForm from '../components/AddForm';

const AddBook = () => {


    return (
        <section className='container'>
            <h1 className='text-center'>Add Book Now</h1>
            <div className='d-flex justify-content-center mt-5'>
               <AddForm/>
            </div>
        </section>
    );
};

export default AddBook;