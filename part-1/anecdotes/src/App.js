import { useState } from "react";

const App = () => {
	const anecdotes = [
		"If it hurts, do it more often",
		"Adding manpower to a late software project makes it later!",
		"The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
		"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
		"Premature optimization is the root of all evil.",
		"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
		"Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
	];

	const [selected, setSelected] = useState(0);
	// const options = {
	// 	0: 0,
	// 	1: 0,
	// 	2: 0,
	// 	3: 0,
	// 	4: 0,
	// 	5: 0,
	// 	6: 0,
	// };
	const [votes, setVote] = useState([]);

	// vote[0] = 0;
	// vote[1] = 0;

	// vote[0] += 1;
	// vote[0] += 1;

	const handleClick = () => {
		setSelected(Math.floor(Math.random() * anecdotes.length));
	};

	const handleVote = () => {
		setVote(votes.concat(selected));
	};

	let votesDisplay = votes.filter(vote => vote = selected);

	console.log(votes);

	return (
		<div>
			{anecdotes[selected]}
			<br />
			<p>has {votesDisplay.length} votes</p>
			<button onClick={handleVote}>vote</button>
			<button onClick={handleClick}>next anecdote</button>
		</div>
	);
};

export default App;
