import React, { useState } from "react";
import _ from "lodash";

const App = () => {
	const [phonebook, setPhonebook] = useState([
		{ name: "Arto Hellas", phone: "040-123456", id: 1 },
		{ name: "Ada Lovelace", phone: "39-44-5323523", id: 2 },
		{ name: "Dan Abramov", phone: "12-43-234345", id: 3 },
		{ name: "Mary Poppendieck", phone: "39-23-6423122", id: 4 },
	]);
	const [newDetails, setNewDetails] = useState({
		name: "",
		phone: "",
	});
	const [searchString, setSearchString] = useState("");

	const handleChange = (event) => {
		const { name, value } = event.target;
		setNewDetails((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSearch = (event) => {
		setSearchString(event.target.value);
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

	const filteredPhonebook = phonebook.filter(
		(item) =>
			item.name.toLowerCase().includes(searchString.toLowerCase()) ||
			item.phone.includes(searchString.toLowerCase())
	);

	const person = filteredPhonebook.map((item) => (
		<p key={item.phone}>
			{item.name}: {item.phone}
		</p>
	));

	return (
		<div>
			<h2>Phonebook</h2>
			<div>
				filter shown with
				<input
					type="search"
					name="search"
					value={searchString}
					onChange={handleSearch}
				/>
			</div>
			<h2>Add new contact</h2>
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
