import React from "react";

export default function User(props) {
	const { details } = props;
	if (!details) {
		return <h3>Working fetching your user&apos;s details...</h3>;
	}

	return (
		<div className="userCard">
			<img alt="" src={details.avatar} />
			<h2>
				<span>{details.first_name}</span> {""}
				<span>{details.last_name}</span>
			</h2>
			<h3>{details.role}</h3>
			<p>Email: {details.email}</p>
		</div>
	);
}
