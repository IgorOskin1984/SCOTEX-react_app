import React, { Suspense } from "react";
import './../../css/index.css'
import s from './Main.module.css'
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Page-Home/HomePage";
import AboutPage from "./Page-About/AboutPage";
import PagesPage from "./Page-Pages/PagesPage";
import ServicesPage from "./Page-Services/ServicesPage";
import CartPage from "./Page-Cart/CartPage";
import GetStartedPage from "./Page-GetStarted/GetStartedPage";

const createRoute = (headerLink, MyComponent) => {
	return (
		<Route path={`/${headerLink}`} element={
			<Suspense fallback={<div>Загрузка...</div>}>
				<MyComponent />
			</Suspense>
		} />
	)
}

const Main = (props) => {
	console.log(props);
	return (
		<div className={s.mainPage + ' ' + s.container}>
			<h1>main</h1>
			<Routes>
				<Route path="/" element={
					<Suspense fallback={<div>Загрузка...</div>}>
						<Navigate to='home' />
					</Suspense>} />

				{createRoute('home', HomePage)}
				{createRoute('about', AboutPage)}
				{createRoute('pages', PagesPage)}
				{createRoute('services', ServicesPage)}
				{createRoute('сart', CartPage)}
				{createRoute('getStarted', GetStartedPage)}

			</Routes>
		</div>
	)
}

export default Main;