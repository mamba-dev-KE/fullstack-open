const Course = ({ courses }) => {
	const courseTopLevelItems = courses.map((course) => {
		const exercisesSum = course.parts
			.map((part) => part.exercises)
			.reduce((prev, curr) => prev + curr);

		return (
			<div key={course.id}>
				<h2>{course.name}</h2>
				{course.parts.map((courseItem) => {
					return (
						<p key={courseItem.id}>
							{courseItem.name} {courseItem.exercises}
						</p>
					);
				})}
				<p>
					<strong>total of {exercisesSum} exercises</strong>
				</p>
			</div>
		);
	});

	return (
		<div>
			<h1>Web development curriculum</h1>
			{courseTopLevelItems}
		</div>
	);
};

export default Course;
