import React from "react";
import s from './BlogPage.module.css'
import ContentComponent from "../../small_Components/Content-Component/ContentComponent";
import { Button } from "../../small_Components/Button/Button";

const BlogPage = (props) => {
	return (
		<section className={s.blogPage}>
			<div className={s.container}>
				<div className={s.content}>
					{/*<div className={s.contentBody}>*/}
					<ContentComponent payload={props.blogPageContent} />
					{/*</div>*/}
					<Button buttonText={props.buttonText} />
				</div>
				<div className={s.items}>
					{/*{cartCreater()}*/}
				</div>
			</div>
		</section>
	)
}

export default BlogPage;