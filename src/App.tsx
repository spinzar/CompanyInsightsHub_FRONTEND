import React, { ChangeEvent, SyntheticEvent, useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Outlet } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from './contexts/AuthenticationContext';

function App() {
    return (
        <>
            <UserProvider>
                <Navbar />
                <Outlet />
                <ToastContainer />
            </UserProvider>
        </>
    );
}

export default App;
