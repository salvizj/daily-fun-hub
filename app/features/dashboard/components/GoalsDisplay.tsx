import Input from "~/components/ui/Input"
import type { Goal } from "~/types/types"

type GoalsDisplayProps = {
	goals: Goal[] | null
	updateValue?: (oldValue: Goal, newValue: Goal) => void
}

const GoalsDisplay = ({ goals, updateValue }: GoalsDisplayProps) => {
	const updateGoalChecked = (index: number) => {
		if (!goals) return

		const updatedGoals = [...goals]
		updatedGoals[index].checked = !updatedGoals[index].checked

		updateValue && updateValue(goals[index], updatedGoals[index])
	}

	return (
		<div className="flex flex-col items-center justify-center gap-4 w-full">
			<h1 className="text-2xl font-bold text-content">Goals</h1>
			{goals === null ? (
				<div className="text-content-muted text-sm">No goals for today.</div>
			) : (
				<ul className="list-disc list-inside text-content">
					{goals.map((goal, index) => (
						<li key={index} className="flex flex-row items-center gap-2">
							{goal.goal}
							<Input
								type={"checkbox"}
								placeholder={"completed"}
								checked={goal.checked}
								onChange={() => updateGoalChecked(index)}
							/>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
export default GoalsDisplay
