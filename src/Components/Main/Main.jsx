import React, { Suspense, forwardRef } from "react";
import s from './Main.module.css'
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

const renderComponent = (componentName, componentRef) => {
	const folderName = `Page-${componentName}`
	const fileName = `Container_${componentName}Page`

	const MyComponent = React.lazy(() => import(`./${folderName}/${fileName}`))
	return <MyComponent ref={componentRef} />;
}

const routerCreater = (arr, componentRef) => {
	//debugger
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

const Main = forwardRef((props, ref) => {
	const location = useLocation();

	return (
		<div className={s.mainPage + ' ' + s.container}>
			<Routes>
				<Route path="/" element={
					<Suspense fallback={<div>Загрузка...</div>}>
						<Navigate to='home' />
					</Suspense>} />

				{routerCreater(props.headerLinks, ref)}

			</Routes>
		</div>
	)
});

export default Main;
