import React from "react";

export default function Form(props) {
	const { formValues, inputChange, checkboxChange, submit, disabled, formErrors } = props;

	const onSubmit = (event) => {
		event.preventDefault();
		submit();
	};
	const onCheckboxChange = (event) => {
		const { name, checked } = event.target;
		checkboxChange(name, checked);
	};

	const onInputChange = (event) => {
		const { name, value } = event.target;
		inputChange(name, value);
	};

	return (
		<form onSubmit={onSubmit}>
			<label htmlFor="name">
				Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<input
					id="nameInput"
					name="name"
					type="text"
					placeholder="Enter your name here"
					maxLength="40"
					onChange={onInputChange}
					value={formValues.name}
				/>
			</label>
			<br />
			<label htmlFor="email">
				Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<input
					id="emailInput"
					name="email"
					type="email"
					placeholder="e.g. email@domain.com"
					maxLength="50"
					onChange={onInputChange}
					value={formValues.email}
				/>
			</label>
			<br />
			<label htmlFor="password">
				Password:&nbsp;&nbsp;
				<input
					id="passwordInput"
					name="password"
					type="password"
					placeholder="min. of 6 characters"
					maxLength="20"
					onChange={onInputChange}
					value={formValues.password}
				/>
			</label>
			<br />
			<label htmlFor="tof">
				Accept Terms of Service:&nbsp;&nbsp;
				<input
					id="tofInput"
					name="tof"
					type="checkbox"
					// onChange={onInputChange}
					// checked={formValues.termOfService}
				/>
			</label>
			<br />
			<button disabled={disabled}>submit</button>
		</form>
	);
}
