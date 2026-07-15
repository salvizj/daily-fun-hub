import type { Route } from "./+types/home"
import { fetchRandomQuote } from "~/api/quotes"
import RandomContentDisplay from "~/components/RandomContentDisplay"
import GoalsDisplay from "~/features/dashboard/components/GoalsDisplay"
import useRandomContent from "~/hooks/useRandomContent"
import { useState } from "react"
import { ModalType } from "~/types/types"
import GoalForm from "~/features/dashboard/components/GoalsForm"
import type { GoalSchema } from "~/schemas/goalsSchema"
import { useLocalStorage } from "~/hooks/useLocalStorage"
import Button from "~/components/ui/Button"

export function meta({}: Route.MetaArgs) {
	return [{ title: "Daily Fun Hub" }, { name: "", content: "" }]
}

export default function Home() {
	const { isLoading, error, data, refetchData } =
		useRandomContent(fetchRandomQuote)
	const [openModal, setOpenModal] = useState<ModalType | null>(null)
	const { storedValue, setValue } = useLocalStorage<GoalSchema>("goals")

	const handleSubmit = (data: GoalSchema) => {
		setValue(data)
		setOpenModal(null)
	}

	return (
		<>
			<div className="flex flex-col items-center justify-center gap-8 flex-1">
				<div className="text-center mb-2">
					<h1 className="text-2xl font-bold text-content">Daily Fun Hub</h1>
					<p className="text-content-muted text-sm mt-1">
						Daily quotes and todays goals.
					</p>
				</div>
				<div className="flex flex-col items-center justify-center gap-4 w-full">
					<RandomContentDisplay
						isLoading={isLoading}
						error={error}
						data={data}
						refetchData={refetchData}
						randomContentLabel="quote"
					/>
				</div>
				<Button onClick={() => setOpenModal(ModalType.GoalForm)}>
					Add Goal
				</Button>
				<GoalsDisplay goals={storedValue} />
				<GoalForm
					isOpen={openModal === ModalType.GoalForm}
					onClose={() => setOpenModal(null)}
					onSubmit={handleSubmit}
				/>
			</div>
		</>
	)
}
