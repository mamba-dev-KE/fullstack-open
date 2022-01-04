import React from "react";

const Contact = ({ item }) => {
	return (
		<p>
			{item.name}: {item.phone}
		</p>
	);
};

export default Contact;
