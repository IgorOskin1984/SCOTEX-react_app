import React, { Suspense, useRef } from "react";
import './../../css/index.css'
import s from './Main.module.css'
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import BlogPageContaimer from "./Page-Blog/Container_BlogPage";

const renderComponent = (componentName, componentRef) => {
	const folderName = `Page-${componentName}`
	const fileName = `Container_${componentName}Page`

	const MyComponent = React.lazy(() => import(`./${folderName}/${fileName}`))
	return <MyComponent ref={componentRef} />;
}

const routerCreater = (arr, componentRef) => {
	return arr.map((title) => {
		const path = `/${title}`
		const componentName = `${title[0].toUpperCase() + title.slice(1)}`;
		return (
			<Route key={title} path={path} element={
				<Suspense fallback={<div>Загрузка...</div>}>
					{renderComponent(componentName, componentRef)}
				</Suspense>
			} />
		)
	})
}

const Main = (props) => {
	const location = useLocation();
	const componentRef = useRef(null);

	return (
		<div className={s.mainPage + ' ' + s.container}>
			<Routes>
				<Route path="/" element={
					<Suspense fallback={<div>Загрузка...</div>}>
						<Navigate to='home' />
					</Suspense>} />

				{routerCreater(props.headerLinks, componentRef)}

			</Routes>
		</div>
	)
}

export default Main;