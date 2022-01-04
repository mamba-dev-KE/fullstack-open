import React, { useState } from "react";
import _ from "lodash";

const App = () => {
	const [phonebook, setPhonebook] = useState([
		{ name: "Arto Hellas", phone: "040-1234567" },
	]);
	const [newDetails, setNewDetails] = useState({
		name: "",
		phone: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setNewDetails((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const isUnique = phonebook.some((phonebookItem) => {
			const isEqual = _.isEqual(phonebookItem.phone, newDetails.phone);
			return isEqual;
		});

		if (isUnique) {
			alert(`The number ${newDetails.phone} was already added to phonebook!`);
		} else {
			setPhonebook((prevState) => [
				...prevState,
				{ name: newDetails.name, phone: newDetails.phone },
			]);
		}
		setNewDetails({
			name: "",
			phone: "",
		});
	};

	const person = phonebook.map((item) => (
		<p key={item.phone}>
			{item.name} {item.phone}
		</p>
	));

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={handleSubmit}>
				<div>
					name:
					<input
						type="text"
						name="name"
						value={newDetails.name}
						onChange={handleChange}
					/>
				</div>
				<div>
					number:
					<input
						type="tel"
						name="phone"
						value={newDetails.phone}
						onChange={handleChange}
					/>
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
