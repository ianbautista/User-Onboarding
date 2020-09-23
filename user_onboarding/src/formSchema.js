import * as yup from "yup";

const formSchema = yup.object().shape({
	email: yup.string().email("Email must be valid").required("Email is required"),
	first_name: yup
		.string()
		.min(2, "First Name must be at least 2 characters")
		.required("Last Name is Required"),
	last_name: yup
		.string()
		.min(2, "Name must be at least 2 characters")
		.required("Name is Required"),
	password: yup
		.string()
		.min(6, "Password must be at least 6 characters")
		.required("Password is Required"),
	role: yup
		.string()
		.oneOf(
			[
				"Designer",
				"Junior Front-End",
				"Senior Front-End",
				"Back-End Engineer",
				"Project Manager",
			],
			"Role is required",
		),
	termsOfService: yup.boolean().oneOf([true], "You must accept Terms of Service"),
});

export default formSchema;
