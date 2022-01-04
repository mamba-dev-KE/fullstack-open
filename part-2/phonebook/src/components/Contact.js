import React from "react";

const Contact = ({ item }) => {
	return (
		<div>
			<p key={item.phone}>
				{item.name}: {item.phone}
			</p>
		</div>
	);
};

export default Contact;
