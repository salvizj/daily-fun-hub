import type { Route } from "./+types/habits"
import { useState } from "react"
import { ModalType, type Habit } from "~/types/types"
import { useLocalStorage } from "~/hooks/useLocalStorage"
import ConfirmDialog from "~/components/ConfirmDialog"
import SectionHeader from "~/components/SectionHeader"
import type { HabitSchema } from "~/schemas/habitSchema"
import HabitForm from "~/features/habit/components/HabitForm"
import HabitsDisplay from "~/features/habit/components/HabitsDisplay"

export function meta({}: Route.MetaArgs) {
	return [{ title: "Daily Fun Hub" }, { name: "", content: "" }]
}

export default function Habits() {
	const [openModal, setOpenModal] = useState<ModalType | null>(null)
	const { storedValue, setValue, updateValue, deleteValue } =
		useLocalStorage<Habit>("habits")
	const handleSubmit = (data: HabitSchema) => {
		const newHabit: Habit = {
			habit: data.habit,
			checked: false,
		}
		setValue(newHabit)
		setOpenModal(null)
	}
	const [deletingHabit, setDeletingHabit] = useState<Habit | null>(null)

	const initiateDeleteHabit = (habit: Habit) => {
		setOpenModal(ModalType.Confirm)
		setDeletingHabit(habit)
	}

	const handleHabitDeletion = () => {
		if (openModal === ModalType.Confirm && deletingHabit != null) {
			deleteValue(deletingHabit)
			setDeletingHabit(null)
		}
	}

	const completedHabitCount =
		storedValue?.filter((habit) => habit.checked).length ?? 0

	return (
		<>
			<div className="flex flex-col items-center justify-center gap-8 flex-1">
				<SectionHeader
					title={"Daily Habit Hub"}
					subtitle="Add your habits and keep track of them."
				/>
				<h3>
					Current progress:
					{storedValue?.length
						? Math.round((completedHabitCount / storedValue.length) * 100)
						: 0}
					%
				</h3>
				<HabitsDisplay
					habits={storedValue}
					updateValue={updateValue}
					initiateDeleteHabit={initiateDeleteHabit}
					setOpenModal={setOpenModal}
				/>
				<HabitForm
					isOpen={openModal === ModalType.HabitForm}
					onClose={() => setOpenModal(null)}
					onSubmit={handleSubmit}
				/>
				<ConfirmDialog
					isOpen={openModal === ModalType.Confirm}
					onClose={() => setOpenModal(null)}
					onConfirm={handleHabitDeletion}
					message="This habit will be permanently deleted."
				/>
			</div>
		</>
	)
}
