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
			<label htmlFor="first_name">
				First Name&nbsp;&nbsp;
				<input
					id="first_nameInput"
					name="first_name"
					type="text"
					placeholder="Your first name here"
					maxLength="40"
					onChange={onInputChange}
					value={formValues.first_name}
				/>
			</label>
			<br />
			<label htmlFor="last_name">
				Last Name&nbsp;&nbsp;
				<input
					id="last_nameInput"
					name="last_name"
					type="text"
					placeholder="Your last name here"
					maxLength="40"
					onChange={onInputChange}
					value={formValues.last_name}
				/>
			</label>
			<br />
			<label htmlFor="email">
				Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
				Password&nbsp;&nbsp;&nbsp;&nbsp;
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
			<label htmlFor="role">
				Role: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<select className="role" onChange={onInputChange} value={formValues.role} name="role">
					<option value="" selected disabled>
						- Select an option -
					</option>
					<option value="Designer">Designer</option>
					<option value="Junior Front-End">Junior Front-End</option>
					<option value="Senior Front-End">Senior Front-End</option>
					<option value="Back-End Engineer">Back-End Engineer</option>
					<option value="Project Manager">Project Manager</option>
				</select>
			</label>
			{/* <br />
			<label htmlFor="avatar">
				Upload Avatar:
				<br />
				<input id="avatar" name="avatar" type="file" onChange={fileSelect} />
				<button onClick={onFileUpload}>upload</button>
			</label> */}
			<br />
			<label htmlFor="termsOfService">
				Accept Terms of Service:&nbsp;&nbsp;
				<input
					className="checkBox"
					id="termsOfServiceInput"
					name="termsOfService"
					type="checkbox"
					onChange={onCheckboxChange}
					checked={formValues.termOfService}
				/>
			</label>
			<br />
			<button className="red" disabled={disabled}>
				submit
			</button>
			<div className="errors">
				<div>{formErrors.username}</div>
				<div>{formErrors.email}</div>
				<div>{formErrors.role}</div>
				<div>{formErrors.civil}</div>
			</div>
		</form>
	);
}
