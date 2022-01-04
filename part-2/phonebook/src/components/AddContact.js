import React from "react";

const AddContact = ({ handleSubmit, newDetails, handleChange }) => {
	return (
		<div>
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
		</div>
	);
};

export default AddContact;
