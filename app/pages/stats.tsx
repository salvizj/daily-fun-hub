import type { Route } from "./+types/stats"
import type { Goal, Habit, Mood } from "~/types/types"
import { MOODS } from "~/constants/constants"
import Card from "~/components/ui/Card"
import useLocalStorage from "~/hooks/useLocalStorage"
import { useRef } from "react"
import generatePDF from "react-to-pdf"
import Button from "~/components/ui/Button"
import MoodDistributionDisplay from "~/features/stats/components/MoodDistributionDisplay"
export function meta({}: Route.MetaArgs) {
	return [{ title: "Daily Fun Hub" }, { name: "", content: "" }]
}

const Stats = () => {
	const { storedValue: goals } = useLocalStorage<Goal>("goals")
	const { storedValue: habits } = useLocalStorage<Habit>("habits")
	const { storedValue: moods } = useLocalStorage<Mood>("moods")

	const checkedGoalsCount = goals?.filter((goal) => goal.checked).length ?? 0
	const checkedHabitCount = habits?.filter((habit) => habit.checked).length ?? 0

	const moodDistribution = MOODS.map(({ mood, label }) => ({
		mood,
		label,
		count: moods?.filter((m) => m.label === label).length ?? 0,
	}))
	const targetRef = useRef<HTMLDivElement>(null)
	return (
		<>
			<div className="flex justify-center items-center flex-1" ref={targetRef}>
				<Card title="Statistics" className="flex flex-col gap-4 p-4">
					<div className="flex justify-between text-md">
						<span className="text-content-secondary">Goals</span>
						<span className="text-content">
							{checkedGoalsCount}/{goals?.length ?? 0}
						</span>
					</div>
					<div className="flex justify-between text-md">
						<span className="text-content-secondary ">Habits</span>
						<span className="text-content">
							{checkedHabitCount}/{habits?.length ?? 0}
						</span>
					</div>
					<MoodDistributionDisplay
						data={moodDistribution}
						title="Mood Distribution"
					/>
					<Button
						onClick={() => generatePDF(targetRef, { filename: "page.pdf" })}
						variant="secondary"
						className="self-center mt-10"
					>
						Download PDF
					</Button>
				</Card>
			</div>
		</>
	)
}
export default Stats
