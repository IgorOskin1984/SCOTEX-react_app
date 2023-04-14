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

//const renderComponent = (componentName) => {
//	const folderName = `Page-${componentName}`
//	const fileName = `${componentName}Page`

//	const MyComponent = React.lazy(() => import(`./${folderName}/${fileName}`))
//	//const MyComponent = <componentName />
//	console.log(MyComponent);
//	return MyComponent;
//}

//const createRoute2 = (headerLink, MyComponent) => {
//	return (
//		<Route path={headerLink} element={
//			<Suspense fallback={<div>Загрузка...</div>}>
//				{renderComponent(MyComponent)}
//			</Suspense>
//		} />
//	)
//}

//const mainRouterCreaters = (arr) => {
//	arr.map((title) => {
//		const headerLink = `/${title}`
//		const MyComponent = `${title[0].toUpperCase() + title.slice(1)}`
//		return (
//			createRoute2(headerLink, MyComponent)
//		)
//	})
//}

const createRoute = (headerLink, MyComponent) => {
	return (
		<Route path={headerLink} element={
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
			<Routes>
				<Route path="/" element={
					<Suspense fallback={<div>Загрузка...</div>}>
						<Navigate to='home' />
					</Suspense>} />

				{/*{mainRouterCreaters(props.headerLinks)}*/}

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