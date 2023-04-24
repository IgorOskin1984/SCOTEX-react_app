import React from 'react';
import './css/App.css';
import { MainContainer } from './Components/Main/Container-Main';
import { HeaderContainer } from './Components/Header/Container_Header';
import s from './css/App.module.css'
import FooterContainer from './Components/Footer/Container_Footer';

function App() {
	return (
		<div className={s.wrapper}>
			<HeaderContainer />
			<MainContainer />
			<FooterContainer />
		</div>
	);
}

export default App;
