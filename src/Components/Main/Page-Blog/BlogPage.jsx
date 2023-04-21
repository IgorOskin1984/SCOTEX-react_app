import React from "react";
import s from './BlogPage.module.css'
import ContentComponent from "../../small_Components/Content-Component/ContentComponent";
import { Button } from "../../small_Components/Button/Button";
import { NavLink } from "react-router-dom";

const cartCreater = (arr) => {
	return arr.map((cart) => {
		const key = cart.title
		return (
			<article key={key} className={s.cart}>
				<div className={s.image}>
					<img src={cart.image} alt="image" />
					<div className={s.label}>
						<NavLink to={'/#'}>{cart.label}</NavLink>
					</div>
				</div>
				<div className={s.cartContent}>
					<div className={s.date}>{cart.date}</div>
					<div className={s.title}>
						<NavLink to={'/#'}>{cart.title}</NavLink>
					</div>
					<div className={s.text}>{cart.text}</div>
					<div className={s.navLink}>
						<NavLink to={`${cart.navLink}`}>{cart.navLinkText}</NavLink>
					</div>
				</div>
			</article>
		)
	})
}

const BlogPage = (props) => {
	return (
		<section className={s.blogPage}>
			<div className={s.items}>
				{cartCreater(props.cartsPayload)}
			</div>
			<div className={s.container}>
				<div className={s.content}>
					<ContentComponent payload={props.blogPageContent} />
					<Button buttonText={props.buttonText} />
				</div>
			</div>
		</section>
	)
}

export default BlogPage;