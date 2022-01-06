import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';

const Main = () => {

    // whether the user is currently trying to login
    const [auth, setAuth] = useState(false);

    return (
        <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home authUser={ auth } setAuth={ setAuth } />}></Route>

            {/* User Dashboard */}
            <Route path="/dashboard"></Route>
        </Routes>
    );
};

export default Main;