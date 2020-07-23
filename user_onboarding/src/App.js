import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Form";
import User from "./User";
import { v4 as uuid } from "uuid";
import axios from "axios";

const initialUserValues = {
	id: uuid(),
	name: "",
	email: "",
	password: "",
	termsOfService: false,
};
console.log(uuid());
const initialFormErrors = [
	{
		id: null,
		name: "",
		email: "",
		password: "",
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
				setUsers(response.data);
			})
			.catch((error) => {
				debugger;
				console.log(error);
			});
	};

	const postNewUser = (newUser) => {
		axios
			.post("https://reqres.in/api/users", newUser)
			.then((response) => {
				setUsers([response.data, ...users]);
				setFormValues(initialUserValues);
			})
			.catch((error) => {
				debugger;
				console.log(error);
			});
	};

	return (
		<div className="container">
			<header>
				<h1>User Onboarding</h1>
			</header>

			<Form />
		</div>
	);
}

export default App;
