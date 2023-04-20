import { connect } from "react-redux";
import BlogPage from "./BlogPage";

const mapStateToProps = (state) => {
	return {
		buttonText: state.commonSate.buttons.buttonTexts.allPosts,
		blogPageContent: state.commonSate.content.blogPageContent
	}
}

const BlogPageContaimer = connect(mapStateToProps, null)(BlogPage);

export default BlogPageContaimer;