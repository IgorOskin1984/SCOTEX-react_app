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

const Main = (props) => {
	return (
		<div className={s.mainPage + ' ' + s.container}>
			<h1>main</h1>
			<Routes>
				<Route path="/" element={
					<Suspense fallback={<div>Загрузка...</div>}>
						<Navigate to='home' />
					</Suspense>} />
				<Route path="/home" element={
					<Suspense fallback={<div>Загрузка...</div>}>
						<HomePage />
					</Suspense>
				} />
				<Route path="/about" element={
					<Suspense fallback={<div>Загрузка...</div>}>
						<AboutPage />
					</Suspense>
				} />
				<Route path="/pages" element={
					<Suspense fallback={<div>Загрузка...</div>}>
						<PagesPage />
					</Suspense>
				} />
				<Route path="/services" element={
					<Suspense fallback={<div>Загрузка...</div>}>
						<ServicesPage />
					</Suspense>
				} />
				<Route path="/сart" element={
					<Suspense fallback={<div>Загрузка...</div>}>
						<CartPage />
					</Suspense>
				} />
				<Route path="/getStarted" element={
					<Suspense fallback={<div>Загрузка...</div>}>
						<GetStartedPage />
					</Suspense>
				} />

			</Routes>
		</div>
	)
}

export default Main;