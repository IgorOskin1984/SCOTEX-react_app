import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import styleButton from './../../small_Components/Button/Button.module.css'
import s from './../Footer.module.css'

const SubscribeFormValidate = (values) => {
	const errors = {};
	if (!values.email) {
		errors.email = 'Required';
	} else if (
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
	) {
		errors.email = 'Invalid email address';
	}
	return errors;
}

const onFormSubmitFunction = (values, { setSubmitting }) => {
	alert(JSON.stringify(values, null, 2));
	setSubmitting(false);
}

const FooterSubscribeForm = (props) => {
	return (
		<Formik
			className={s.formik}
			initialValues={{ email: '', password: '' }}
			validate={SubscribeFormValidate}
			onSubmit={onFormSubmitFunction}
		>
			{({ isSubmitting }) => (
				<Form className={s.subcribe}>
					<div className={s.subcribeBody}>
						<Field
							className={s.input}
							type="email"
							name="email"
							placeholder='Enter your email'
						/>
						<ErrorMessage className={s.error} name="email" component="div" />
					</div>

					<button className={styleButton.button} type="submit" disabled={isSubmitting}>
						Submit
					</button>
				</Form>
			)}
		</Formik>
	)
}

export default FooterSubscribeForm;