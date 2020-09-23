describe("Initialize test", () => {
	it("can navigate to the site", () => {
		cy.visit("http://localhost:3001");
		cy.url().should("include", "localhost");
	});
});

describe("MVP Testing", () => {
	it("Gets the `Name` input and type a name in it", () => {
		cy.get('input[name="first_name"]').type("Christian").should("have.value", "Christian");
	});
	it("Gets the `Name` input and type a name in it", () => {
		cy.get('input[name="last_name"]').type("Bautista").should("have.value", "Bautista");
	});
	it("Get the `Email` input and type an email address in it", () => {
		cy.get('input[name="email"]').type("christian@lambda.com");
	});

	it("Get the `password` input and type a password in it", () => {
		cy.get('input[name="password"]').type("Christian").should("have.value", "Christian");
	});

	it("STRETCH Can select role", () => {
		cy.get("select.role")
			.select("Designer")
			.should("have.value", "Designer")
			.select("Junior Front-End")
			.should("have.value", "Junior Front-End")
			.select("Senior Front-End")
			.should("have.value", "Senior Front-End")
			.select("Back-End Engineer")
			.should("have.value", "Back-End Engineer")
			.select("Project Manager")
			.should("have.value", "Project Manager");
	});

	it("Check to see if a user can check the terms of service box", () => {
		cy.get('input[name="termsOfService"]').check();
	});

	it("Check to see if a user can submit the form data", () => {
		cy.get("button.red").should("not.be.disabled");
	});
	it("Check for form validation if an input is left empty", () => {
		cy.get("button.red").click();
	});
});
