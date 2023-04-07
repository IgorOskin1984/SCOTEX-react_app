import React from 'react';
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import logo from './logo.svg';
import './css/App.css';

function App() {
	return (
		<div class="wrapper">
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
