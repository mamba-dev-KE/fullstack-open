import React, { useState } from "react";

const Button = ({ text, onClick }) => {
	return <button onClick={onClick}>{text}</button>;
};

const Options = ({ options, handleGood, handleNeutral, handleBad }) => {
	return (
		<div>
			<Button text={options[0]} onClick={handleGood} />
			<Button text={options[1]} onClick={handleNeutral} />
			<Button text={options[2]} onClick={handleBad} />
		</div>
	);
};

const Statistics = ({ good, neutral, bad }) => {
	return (
		<div>
			<h2>statistics</h2>
			<p>good {good}</p>
			<p>neutral {neutral}</p>
			<p>bad {bad}</p>
		</div>
	);
};

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	const options = ["good", "neutral", "bad"];

	const handleGood = () => {
		return setGood(good + 1);
	};
	const handleNeutral = () => {
		setNeutral(neutral + 1);
	};
	const handleBad = () => {
		setBad(bad + 1);
	};

	return (
		<div>
			<h1 onClick={handleGood}> give feedback </h1>
			<Options
				options={options}
				handleGood={handleGood}
				handleNeutral={handleNeutral}
				handleBad={handleBad}
			/>
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	);
};

export default App;
