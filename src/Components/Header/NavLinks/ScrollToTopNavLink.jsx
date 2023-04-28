import { NavLink } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import s from './MenuLink.module.css'

function scrollToTop(node) {
	if (node) {
		node.scrollIntoView({ behavior: "smooth", block: "start" });
	}
}

const ScrollToTopNavLink = (props) => {

	debugger

	const isMountedRef = useRef(false);
	const linkRef = useRef(null);

	useEffect(() => {
		if (!isMountedRef.current) {
			isMountedRef.current = true;
			scrollToTop(props.componentRef.current);
		}
	}, [props.componentRef]);

	function handleClick() {
		if (props.componentRef.current) {
			scrollToTop(props.componentRef.current);
		}
	}

	return (
		<li onClick={handleClick} className={s.listItem + ' ' + props.liClassName}>
			<NavLink
				to={`/${props.linkPath}`}
				className={({ isActive }) => isActive ? s.isActive : s.listLink + ' ' + props.className}
				onClick={handleClick}
			>
				{props.title}
			</NavLink>
		</li >
	);
}

export default ScrollToTopNavLink;
