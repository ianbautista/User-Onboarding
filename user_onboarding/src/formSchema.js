import * as yup from "yup";

const formSchema = yup.object().shape({
	email: yup.string().email("Email must be valid").required("Email is required"),
	username: yup
		.string()
		.min(3, "Username must be at least 3 characters")
		.required("Username is Required"),
	password: yup
		.string()
		.min(6, "Password must be at least 6 characters")
		.required("Password is Required"),
	tof: yup.boolean().oneOf([true], "You must accept Terms of Service"),
});

export default formSchema;
