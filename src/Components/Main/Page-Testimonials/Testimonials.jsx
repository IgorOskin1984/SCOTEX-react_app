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
//*=============================================
//*<div className={`${s.avatar} ${s[styleName]}`}>
//* название класса выводится в {console.log(styleName)}
//* отсюда название переписывалось вручную в Testimonials.module.css
//*=============================================
const cartCreater = (arr, star) => {
	return arr.map((user) => {
		let styleName = `style${user.userName.replace(/\s/g, '')}`;
		return (
			<div key={user.userName} className={s.user}>
				<div className={s.header}>
					{/*{console.log(styleName)}*/}
					<div className={`${s.avatar} ${s[styleName]}`}>
						<img src={user.avatar} alt="img" />
					</div>
					<div className={s.body}>
						<div className={s.userName}>{user.userName}</div>
						<div className={s.userCompany}>{user.userCompany}</div>
					</div>
				</div>
				<div className={s.title}>{user.title}</div>
				<div className={s.text}>
					<p>{user.text}</p>
				</div>
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
						<ContentComponent payload={props.testimonialsPageContent} />
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