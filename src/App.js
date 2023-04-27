import React from 'react';
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import './css/App.css';
import { MainContainer } from './Components/Main/Container-Main';
import { HeaderContainer } from './Components/Header/Container_Header';

function App() {
	return (
		<div class="wrapper">
			<HeaderContainer />
			<MainContainer />
			<Footer />
		</div>
	);
}

export default App;
