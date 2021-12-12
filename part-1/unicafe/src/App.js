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

/* Statistics component for displaying statistics */
const Statistics = ({ good, neutral, bad, allClicks, sum }) => {
	let average = sum / allClicks.length;
	let positivePercent = (good / (good + neutral + bad)) * 100;

	if (allClicks.length !== 0) {
		return (
			<div>
				<p>good {good}</p>
				<p>neutral {neutral}</p>
				<p>bad {bad}</p>
				<p>all {good + neutral + bad}</p>
				<p>average {average ? `: ${average}` : ":"}</p>
				<p>positive {positivePercent ? `: ${positivePercent} %` : ":"} </p>
			</div>
		);
	}
	return (
		<div>
			<p>No feedback given</p>
		</div>
	);
};

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	const [allClicks, setAll] = useState([]);

	let sum = 0;

	const options = ["good", "neutral", "bad"];

	const handleGood = () => {
		setAll(allClicks.concat(1));
		setGood(good + 1);
	};
	const handleNeutral = () => {
		setAll(allClicks.concat(0));
		setNeutral(neutral + 1);
	};
	const handleBad = () => {
		setAll(allClicks.concat(-1));
		setBad(bad + 1);
	};

	allClicks.forEach((item) => (sum += item));

	return (
		<div>
			<h1> give feedback </h1>
			<Options
				options={options}
				handleGood={handleGood}
				handleNeutral={handleNeutral}
				handleBad={handleBad}
			/>
			<h2>statistics</h2>
			<Statistics
				good={good}
				neutral={neutral}
				bad={bad}
				allClicks={allClicks}
				sum={sum}
			/>
		</div>
	);
};

export default App;
