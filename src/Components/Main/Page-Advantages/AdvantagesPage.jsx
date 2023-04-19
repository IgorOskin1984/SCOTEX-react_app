import React from "react";
import s from './AdvantagesPage.module.css'

const advantagesPageContentCreater = (arr) => {
	return arr.map((item) => {
		return (
			<article key={item.value} className={s.contentItem}>
				<h4 className={s.title}>{item.value}</h4>
				<div className={s.text}>
					<p>{item.text}</p>
				</div>
			</article>
		)
	})
}

const AdvantagesPage = (props) => {
	return (
		<>
			<section className={s.advantagesPage}>
				<div className={s.container}>
					<div className={s.content}>
						{advantagesPageContentCreater(props.advantagesPageContent)}
					</div>
					<div className={s.image}>
						<img src={props.advantagesPageImage} alt="advantagesPageImage" />
					</div>
				</div>
			</section>
		</>
	)
}

export default AdvantagesPage;