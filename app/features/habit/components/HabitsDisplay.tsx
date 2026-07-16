import { Trash2 } from "lucide-react"
import Button from "~/components/ui/Button"
import Card from "~/components/ui/Card"
import Input from "~/components/ui/Input"
import { ModalType, type Habit } from "~/types/types"

type HabitsDisplayProps = {
	habits: Habit[] | null
	updateValue: (oldValue: Habit, newValue: Habit) => void
	initiateDeleteHabit: (habit: Habit) => void
	setOpenModal: (modalType: ModalType) => void
}

const HabitsDisplay = ({
	habits,
	updateValue,
	initiateDeleteHabit,
	setOpenModal,
}: HabitsDisplayProps) => {
	const updateHabitChecked = (index: number) => {
		if (!habits) return

		const updatedHabits = [...habits]
		updatedHabits[index].checked = !updatedHabits[index].checked

		updateValue(habits[index], updatedHabits[index])
	}
	if (habits === null || habits.length === 0) {
		return (
			<div className="flex flex-col gap-2 justify-center">
				<div className="text-content-muted text-sm">No habits added yet.</div>
				<Button
					onClick={() => setOpenModal(ModalType.HabitForm)}
					className="self-center"
				>
					Add Habit
				</Button>
			</div>
		)
	}
	return (
		<div className="flex flex-col items-center justify-center w-full">
			<Card
				className="flex flex-col gap-2 w-full max-w-md border border-border p-4 rounded-2xl bg-surface-elevated"
				title="Habits"
			>
				{habits.map((habit, index) => (
					<div
						key={index}
						className="flex flex-row items-center gap-2 justify-between"
					>
						<div className="flex flew-row gap-2 items-center">
							<Input
								type={"checkbox"}
								placeholder={"completed"}
								checked={habit.checked}
								onChange={() => updateHabitChecked(index)}
							/>
							<span
								className={
									habit.checked
										? "line-through text-content-muted"
										: "text-content"
								}
							>
								{habit.habit}
							</span>
						</div>
						<Button
							onClick={() => initiateDeleteHabit(habit)}
							noFocus={true}
							variant="ghost"
						>
							<Trash2 />
						</Button>
					</div>
				))}
				<Button
					onClick={() => setOpenModal(ModalType.HabitForm)}
					className="self-center"
				>
					Add Another Habit
				</Button>
			</Card>
		</div>
	)
}
export default HabitsDisplay
