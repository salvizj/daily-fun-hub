import { Trash2 } from "lucide-react"
import Button from "~/components/ui/Button"
import Card from "~/components/ui/Card"
import Input from "~/components/ui/Input"
import { ModalType, type Goal } from "~/types/types"

type GoalsDisplayProps = {
	goals: Goal[] | null
	updateValue: (oldValue: Goal, newValue: Goal) => void
	initiateDeleteGoal: (goal: Goal) => void
	setOpenModal: (modalType: ModalType) => void
}

const GoalsDisplay = ({
	goals,
	updateValue,
	initiateDeleteGoal,
	setOpenModal,
}: GoalsDisplayProps) => {
	const updateGoalChecked = (index: number) => {
		if (!goals) return

		const updatedGoals = [...goals]
		updatedGoals[index].checked = !updatedGoals[index].checked

		updateValue(goals[index], updatedGoals[index])
	}

	return (
		<div className="flex flex-col items-center justify-center w-full">
			{goals === null ? (
				<div className="text-content-muted text-sm">No goals for today.</div>
			) : (
				<Card className="flex flex-col gap-2 w-full max-w-md border border-border p-4 rounded-2xl bg-surface-elevated">
					{goals.map((goal, index) => (
						<div
							key={index}
							className="flex flex-row items-center gap-2 justify-between"
						>
							<div className="flex flew-row gap-2 items-center">
								<Input
									type={"checkbox"}
									placeholder={"completed"}
									checked={goal.checked}
									onChange={() => updateGoalChecked(index)}
								/>
								<span
									className={
										goal.checked
											? "line-through text-content-muted"
											: "text-content"
									}
								>
									{goal.goal}
								</span>
							</div>
							<Button
								onClick={() => initiateDeleteGoal(goal)}
								noFocus={true}
								variant="ghost"
							>
								<Trash2 />
							</Button>
						</div>
					))}
					<Button
						onClick={() => setOpenModal(ModalType.GoalForm)}
						className="self-center"
					>
						Add Goal
					</Button>
				</Card>
			)}
		</div>
	)
}
export default GoalsDisplay
