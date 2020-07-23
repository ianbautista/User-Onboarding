import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Form";
import User from "./User";
import { v4 as uuid } from "uuid";
import axios from "axios";
import formSchema from "./formSchema";
import * as yup from "yup";

const initialUserValues = {
	id: uuid(),
	first_name: "",
	last_name: "",
	email: "",
	password: "",
	role: "",
	termsOfService: false,
};

const initialFormErrors = [
	{
		id: null,
		first_name: "",
		last_name: "",
		email: "",
		password: "",
		role: "",
	},
];

const initialUsers = [];
const initialDisabled = true;

function App() {
	const [users, setUsers] = useState(initialUsers);
	const [formValues, setFormValues] = useState(initialUserValues);
	const [formErrors, setFormErrors] = useState(initialFormErrors);
	const [disabled, setDisabled] = useState(initialDisabled);

	const getUsers = () => {
		axios
			.get("https://reqres.in/api/users")
			.then((response) => {
				console.log(response);
				setUsers(response.data.data);
			})
			.catch((error) => {
				debugger;
				console.log(error);
				alert(`Oops! We have a problem my friend. ${error}`);
			});
	};

	const postNewUser = (newUser) => {
		axios
			.post("https://reqres.in/api/users", newUser)
			.then((response) => {
				console.log(response);
				setUsers([response.data, ...users]);
				setFormValues(initialUserValues);
			})
			.catch((error) => {
				debugger;
				console.log(error);
				alert(`Oops! We have a problem my friend. ${error}`);
			});
	};

	const inputChange = (name, value) => {
		yup
			.reach(formSchema, name)
			.validate(value)
			.then(() => {
				setFormErrors({
					...formErrors,
					[name]: "",
				});
			})
			.catch((error) => {
				setFormErrors({
					...formErrors,
					[name]: error.errors[0],
				});
			});
		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	const checkboxChange = (name, isChecked) => {
		yup
			.reach(formSchema, name)
			.validate(isChecked)
			.then(() => {
				setFormErrors({
					...formErrors,
					[name]: "",
				});
			})
			.catch((error) => {
				setFormErrors({
					...formErrors,
					[name]: error.errors[0],
				});
			});
		setFormValues({
			...formValues,
			[name]: isChecked,
		});
	};

	const submit = () => {
		const newUser = {
			first_name: formValues.first_name.trim(),
			last_name: formValues.last_name.trim(),
			email: formValues.email.trim(),
			password: formValues.password.trim(),
			role: formValues.role,
			termsOfService: formValues.termsOfService,
		};
		postNewUser(newUser);
	};

	useEffect(() => {
		formSchema.isValid(formValues).then((valid) => {
			setDisabled(!valid);
		});
	}, [formValues]);

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div className="container App">
			<header className="App-header">
				<div className="segment">
					<h1>User Onboarding</h1>
				</div>
				<div className="formContainer">
					<Form
						formValues={formValues}
						inputChange={inputChange}
						checkboxChange={checkboxChange}
						submit={submit}
						disabled={disabled}
						formErrors={formErrors}
					/>
				</div>
			</header>
			<section className="cardContainer">
				{users.map((user) => {
					return <User key={user.id} details={user} />;
				})}
			</section>
		</div>
	);
}

export default App;
