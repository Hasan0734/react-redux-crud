import React, { useState } from 'react';
import EditForm from '../components/EditForm';


const EditBook = () => {


    return (
        <section className='container'>
            <h1 className='text-center'>Edit Book</h1>
            <div className='d-flex justify-content-center mt-5'>
               <EditForm/>
            </div>
        </section>
    );
};

export default EditBook;