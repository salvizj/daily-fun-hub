type GoalsDisplayProps = {
	goals: { goal: string }[] | null
}

const GoalsDisplay = ({ goals }: GoalsDisplayProps) => {
	return (
		<div className="flex flex-col items-center justify-center gap-4 w-full">
			<h1 className="text-2xl font-bold text-content">Goals</h1>
			{goals === null ? (
				<div className="text-content-muted text-sm">No goals for today.</div>
			) : (
				<ul className="list-disc list-inside text-content">
					{goals.map((goal, index) => (
						<li key={index}>{goal.goal}</li>
					))}
				</ul>
			)}
		</div>
	)
}
export default GoalsDisplay
