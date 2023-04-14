import React from "react";
import './../../css/index.css'
import s from './Main.module.css'
import { Route, Routes } from "react-router-dom";
import HomePage from "./Page-Home/HomePage";
import AboutPage from "./Page-About/AboutPage";
import PagesPage from "./Page-Pages/PagesPage";
import ServicesPage from "./Page-Services/ServicesPage";
import CartPage from "./Page-Cart/CartPage";
import GetStartedPage from "./Page-GetStarted/GetStartedPage";

const Main = (props) => {
	return (
		<div className={s.mainPage + ' ' + s.container}>
			<h1>main</h1>
			<Routes>
				{/*<Route path="/" element={<Main />} />*/}
				<Route path="/home" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/pages" element={<PagesPage />} />
				<Route path="/services" element={<ServicesPage />} />
				<Route path="/сart" element={<CartPage />} />
				<Route path="/getStarted" element={<GetStartedPage />} />
			</Routes>
		</div>
	)
}

export default Main;