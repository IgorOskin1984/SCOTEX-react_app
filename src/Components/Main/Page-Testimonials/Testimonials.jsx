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
					<div className={s.items}>
						<div className={s.item}>
							<div className={s.header}>
								<div className={s.image}>
									<img src="" alt="img" />
								</div>
								<div className={s.userData}>
									<div className={s.userName}>John Doe</div>
									<div className={s.userCompany}>Company Name</div>
								</div>
							</div>
							<div className={s.title}>"I recommend this agency"</div>
							<div className={s.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.</div>
							<div className={s.stars}>
								<img src="" alt="star" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
export default Testimonials;