import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Ticket from './components/Ticket';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
				<Route path="/ticket" element={<Ticket />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
