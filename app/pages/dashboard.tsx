import type { Route } from "./+types/home"
import { fetchRandomQuote } from "~/api/quotes"
import RandomContentDisplay from "~/components/RandomContentDisplay"
import GoalsDisplay from "~/features/dashboard/components/GoalsDisplay"
import useRandomContent from "~/hooks/useRandomContent"
import { useState } from "react"
import { ModalType, type Goal } from "~/types/types"
import GoalForm from "~/features/dashboard/components/GoalsForm"
import type { GoalSchema } from "~/schemas/goalsSchema"
import { useLocalStorage } from "~/hooks/useLocalStorage"
import ConfirmDialog from "~/components/ConfirmDialog"
import SectionHeader from "~/components/SectionHeader"
import Input from "~/components/ui/Input"
import useSearch from "~/hooks/useSearch"

export function meta({}: Route.MetaArgs) {
	return [{ title: "Daily Fun Hub" }, { name: "", content: "" }]
}

export default function Home() {
	const { isLoading, error, data, refetchData } =
		useRandomContent(fetchRandomQuote)
	const [openModal, setOpenModal] = useState<ModalType | null>(null)
	const { storedValue, setValue, updateValue, deleteValue } =
		useLocalStorage<Goal>("goals")
	const handleSubmit = (data: GoalSchema) => {
		const newGoal: Goal = {
			goal: data.goal,
			checked: false,
		}
		setValue(newGoal)
		setOpenModal(null)
	}
	const [deletingGoal, setDeletingGoal] = useState<Goal | null>(null)

	const initiateDeleteGoal = (goal: Goal) => {
		setOpenModal(ModalType.Confirm)
		setDeletingGoal(goal)
	}

	const handleGoalDeletion = () => {
		if (openModal === ModalType.Confirm && deletingGoal != null) {
			deleteValue(deletingGoal)
			setDeletingGoal(null)
		}
	}

	const { query, setQuery, results } = useSearch(storedValue ?? [])
	return (
		<>
			<div className="flex flex-col items-center justify-center gap-8 flex-1">
				<SectionHeader
					title={"Daily Dashoard Hub"}
					subtitle="Daily quotes and todays goals."
				/>
				<div className="flex flex-col items-center justify-center gap-4 w-full">
					<RandomContentDisplay
						isLoading={isLoading}
						error={error}
						data={data}
						refetchData={refetchData}
						randomContentLabel="quote"
					/>
				</div>
				<SectionHeader
					title={"Goals"}
					subtitle="Add your goals and keep track of them."
				/>
				<Input
					type={"text"}
					placeholder={"Search"}
					onChange={(e) => setQuery(e.target.value)}
					value={query}
				/>
				<GoalsDisplay
					goals={results}
					updateValue={updateValue}
					initiateDeleteGoal={initiateDeleteGoal}
					setOpenModal={setOpenModal}
				/>
				<GoalForm
					isOpen={openModal === ModalType.GoalForm}
					onClose={() => setOpenModal(null)}
					onSubmit={handleSubmit}
				/>
				<ConfirmDialog
					isOpen={openModal === ModalType.Confirm}
					onClose={() => setOpenModal(null)}
					onConfirm={handleGoalDeletion}
					message="This goal will be permanently deleted."
				/>
			</div>
		</>
	)
}
