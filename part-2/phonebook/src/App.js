import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import AddContact from "./components/AddContact";
import Contact from "./components/Contact";
import Search from "./components/Search";

const App = () => {
	const [phonebook, setPhonebook] = useState([]);
	const [newDetails, setNewDetails] = useState({
		name: "",
		phone: "",
	});
	const [searchString, setSearchString] = useState("");

	useEffect(() => {
		axios.get("http://localhost:3001/persons").then((response) => {
			const data = response.data;
			setPhonebook(data);
		});
	}, []);

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
			alert(`Successfully added new contact: ${newDetails.name}!`);
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

	const phonebookItems = filteredPhonebook.map((item) => (
		<Contact key={item.id} item={item} />
	));

	return (
		<div>
			<h2>Phonebook</h2>

			<Search searchString={searchString} handleSearch={handleSearch} />

			<AddContact
				handleSubmit={handleSubmit}
				newDetails={newDetails}
				handleChange={handleChange}
			/>

			<h2>Numbers</h2>
			{phonebookItems}
		</div>
	);
};

export default App;
