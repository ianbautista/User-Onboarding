import React from "react";

export default function Form() {
	return (
		<form>
			<label htmlFor="name">
				Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<input
					id="nameInput"
					name="name"
					type="text"
					placeholder="Enter name here"
					maxLength="40"
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
				/>
			</label>
			<br />
			<label htmlFor="password">
				Password:&nbsp;&nbsp;
				<input
					id="passwordInput"
					name="password"
					type="password"
					placeholder="must be longer than 6 characters"
					maxLength="20"
				/>
			</label>
			<br />
			<label htmlFor="tof">
				Accept Terms of Service:&nbsp;&nbsp;
				<input id="tofInput" name="tof" type="checkbox" />
			</label>
			<br />
		</form>
	);
}
