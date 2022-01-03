import React, { useState } from "react";

const App = () => {
	const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
	const [newName, setNewName] = useState("");

	const handleChange = (event) => {
		setNewName(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setPersons((prevState) => [...prevState, { name: newName }]);
		setNewName("");
	};

	const person = persons.map((person) => (
		<p key={person.name}>{person.name}</p>
	));

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={handleSubmit}>
				<div>
					name: <input value={newName} onChange={handleChange} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{person}
		</div>
	);
};

export default App;