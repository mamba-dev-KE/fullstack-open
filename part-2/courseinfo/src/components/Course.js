const Course = ({ course }) => {
	const exercises = course.parts.map((part) => part.exercises);
	let total = exercises.reduce((prev, curr) => prev + curr);
	return (
		<div>
			<h1>{course.name}</h1>
			{course.parts.map((part) => (
				<p key={part.id}>
					{part.name} {part.exercises}
				</p>
			))}
			<p>the total is {total}</p>
		</div>
	);
};

export default Course;
