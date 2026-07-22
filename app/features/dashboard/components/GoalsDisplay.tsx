import { Trash2 } from "lucide-react"
import React, { useState } from "react"
import Button from "~/components/ui/Button"
import Card from "~/components/ui/Card"
import Input from "~/components/ui/Input"
import { ModalType, type Goal } from "~/types/types"

type GoalsDisplayProps = {
	goals: Goal[]
	updateValue: (oldValue: Goal, newValue: Goal) => void
	initiateDeleteGoal: (goal: Goal) => void
	setOpenModal: (modalType: ModalType) => void
	draggingItem: Goal | null
	handleDragStart: (goal: Goal) => void
	handleDragOver: (e: React.DragEvent) => void
	handleOnDrop: (goal: Goal) => void
	handleOnDragEnd: () => void
}

const GoalsDisplay = ({
	goals,
	updateValue,
	initiateDeleteGoal,
	setOpenModal,
	draggingItem,
	handleDragStart,
	handleDragOver,
	handleOnDrop,
	handleOnDragEnd,
}: GoalsDisplayProps) => {
	const updateGoalChecked = (index: number) => {
		if (!goals) return

		const updatedGoals = [...goals]
		updatedGoals[index].checked = !updatedGoals[index].checked

		updateValue(goals[index], updatedGoals[index])
	}

	if (goals.length === 0) {
		return (
			<div className="flex flex-col gap-2 justify-center">
				<div className="text-content-muted text-sm">No goals added yet.</div>
				<Button
					onClick={() => setOpenModal(ModalType.GoalForm)}
					className="self-center"
				>
					Add Goal
				</Button>
			</div>
		)
	}

	return (
		<div className="flex flex-col items-center justify-center w-full">
			<Card
				className="flex flex-col gap-2 w-full max-w-md border border-border p-4 rounded-2xl bg-surface-elevated"
				title="Goals"
			>
				{goals.map((goal, index) => (
					<div
						key={index}
						className={`flex flex-row items-center gap-2 justify-between border-2 rounded-md pl-4 cursor-grab transition-colors ${
							goal === draggingItem
								? "border-accent"
								: "border-border hover:border-primary-light"
						}`}
						draggable
						onDragStart={() => handleDragStart(goal)}
						onDragOver={handleDragOver}
						onDrop={() => handleOnDrop(goal)}
						onDragEnd={handleOnDragEnd}
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
					Add Another Goal
				</Button>
			</Card>
		</div>
	)
}
export default GoalsDisplay
