import React, { Suspense } from "react";
import './../../css/index.css'
import s from './Main.module.css'
import { Navigate, Route, Routes } from "react-router-dom";
import BlogPageContaimer from "./Page-Blog/Container_BlogPage";

const renderComponent = (componentName) => {
	const folderName = `Page-${componentName}`
	const fileName = `Container_${componentName}Page`

	const MyComponent = React.lazy(() => import(`./${folderName}/${fileName}`))
	return <MyComponent />;
}

const routerCreater = (arr) => {
	return arr.map((title) => {
		const headerLink = `/${title}`
		const componentName = `${title[0].toUpperCase() + title.slice(1)}`;
		return (
			<Route key={title} path={headerLink} element={
				<Suspense fallback={<div>Загрузка...</div>}>
					{renderComponent(componentName)}
				</Suspense>
			} />
		)
	})
}

const Main = (props) => {
	return (
		<div className={s.mainPage + ' ' + s.container}>
			<Routes>
				<Route path="/" element={
					<Suspense fallback={<div>Загрузка...</div>}>
						<Navigate to='home' />
					</Suspense>} />

				{routerCreater(props.headerLinks)}

				<Route path="/blog" element={
					<Suspense fallback={<div>Загрузка...</div>}>
						<BlogPageContaimer />
					</Suspense>} />

			</Routes>
		</div>
	)
}

export default Main;