import { Button } from "../../small_Components/Button/Button";
import ContentComponent from "../../small_Components/Content-Component/ContentComponent"
import s from './Testimonials.module.css'

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
					<div className={items}>
						<div className={s.item}></div>
					</div>
				</div>
			</section>
		</>
	)
}
export default Testimonials;