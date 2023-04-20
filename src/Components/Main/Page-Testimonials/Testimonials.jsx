import { Button } from "../../small_Components/Button/Button";
import ContentComponent from "../../small_Components/Content-Component/ContentComponent"
import s from './Testimonials.module.css'

const renderStars = (quantity, star) => {
	const stars = [];
	let index = 'Testimonials'
	for (let i = 0; i < quantity; i++) {
		index += i
		stars.push({ star, index });
	}
	return stars.map((el) => {
		return (
			<img key={el.index} src={el.star} alt="star" />
		)
	})
}

const cartCreater = (arr, star) => {
	return arr.map((user) => {
		let styleName = `style${user.userName.replace(/\s/g, '')}`;
		return (
			<div key={user.userName} className={s.item}>
				<div className={s.header}>
					{console.log(styleName)}
					<div className={`${s.userImage} ${s[styleName]}`}>
						<img src={user.userImage} alt="img" />
					</div>
					<div className={s.userData}>
						<div className={s.userName}>{user.userName}</div>
						<div className={s.userCompany}>{user.userCompany}</div>
					</div>
				</div>
				<div className={s.title}>{user.title}</div>
				<div className={s.text}>{user.text}</div>
				<div className={s.stars}>
					{renderStars(user.reiting, star)}
				</div>
			</div >
		)
	})
}

const Testimonials = (props) => {
	return (
		<>
			<section className={s.testimonials}>
				<div className={s.container}>
					<div className={s.content}>
						<div>
							<ContentComponent payload={props.testimonialsPageContent} />
						</div>
						<Button buttonText={props.buttonText} />
					</div>
					<div className={s.items}>
						{cartCreater(props.usersCartData, props.star)}
					</div>
				</div>
			</section>
		</>
	)
}
export default Testimonials;