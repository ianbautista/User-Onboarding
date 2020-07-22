import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Form";
import User from "./user";
import { v4 as uuid } from "uuid";

const initialUserValues = {
	id: uuid(),
	name: "",
	email: "",
	password: "",
	"terms of service": "",
};

const initialUserList = [
	{
		name: "Christian Bautista",
		email: "christian@lambda.com",
		password: "lambda12345",
		"terms of service": true,
	},
];

function App() {}
export default App;
