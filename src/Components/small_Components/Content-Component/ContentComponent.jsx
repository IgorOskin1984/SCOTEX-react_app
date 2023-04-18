import React from "react";
import s from './ContentComponent.module.css'

const ContentComponent = (props) => {
	//debugger
	return <>
		{props.payload.label && <a a href="#" className={s.label}>{props.payload.label}</a>}
		{props.payload.label
			? <h1 className={s.title}>{props.payload.title}</h1>
			: <h1 className={s.titleWithBefore}>{props.payload.title}</h1>}
		<div className={s.text}>
			<p>
				{props.payload.text}
			</p>
		</div>
	</>
}

export default ContentComponent;