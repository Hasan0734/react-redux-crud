import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '../Layout/Footer';
import Navbar from '../Layout/Navbar';
import AddBook from '../pages/AddBook';
import EditBook from '../pages/EditBook';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import ShowBook from '../pages/ShowBook';

const Index = () => {
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/add-book' element={<AddBook/>} />
                <Route path='/show-books' element={<ShowBook/>} />
                <Route path='/edit-book' element={<EditBook/>} />
                <Route path='*' element={<NotFound/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};

export default Index;