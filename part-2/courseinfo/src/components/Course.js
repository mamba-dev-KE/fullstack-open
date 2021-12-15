const Course = ({ courses }) => {
	return (
		<div>
			<h1>Web development curriculum</h1>
			{courses.map((course) => (
				<div key={course.id}>
					<h2 key={course.id}>{course.name}</h2>
					{/* Create the courses */}
					{course.parts.map((part) => (
						<p key={course.parts.id}>
							{part.name} {part.exercises}
						</p>
					))}

					{/* Create the exercise totals */}
					<p>
						{" "}
						total of{" "}
						{course.parts
							.map((part) => part.exercises)
							.reduce((prev, curr) => prev + curr)}{" "}
						exercises
					</p>
				</div>
			))}
		</div>
	);
};

export default Course;
