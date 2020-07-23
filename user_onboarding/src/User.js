import React from "react";

export default function User(props) {
	const { details } = props;
	if (!details) {
		return <h3>Working fetching your user&apos;s details...</h3>;
	}

	return (
		<div>
			<h2>{details.name}</h2>
			<p>Email: {details.email}</p>
		</div>
	);
}
