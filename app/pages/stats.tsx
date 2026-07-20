import type { Route } from "./+types/stats"
import type { Goal, Habit, Mood } from "~/types/types"
import { MOODS } from "~/constants/constants"
import Card from "~/components/ui/Card"
import useLocalStorage from "~/hooks/useLocalStorage"
import { useRef } from "react"
import generatePDF from "react-to-pdf"
import Button from "~/components/ui/Button"
export function meta({}: Route.MetaArgs) {
	return [{ title: "Daily Fun Hub" }, { name: "", content: "" }]
}

export default function Stats() {
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
					<div className="flex justify-between text-sm">
						<span className="text-content-muted">Goals</span>
						<span className="text-content">
							{checkedGoalsCount}/{goals?.length ?? 0}
						</span>
					</div>
					<div className="flex justify-between text-sm">
						<span className="text-content-muted">Habits</span>
						<span className="text-content">
							{checkedHabitCount}/{habits?.length ?? 0}
						</span>
					</div>
					<div className="flex flex-col gap-2">
						<h3 className="text-content-secondary text-sm">
							Mood Distribution
						</h3>
						<ul className="flex flex-col gap-1">
							{moodDistribution.map(({ mood, label, count }) => (
								<li
									key={mood}
									className="flex justify-between items-center px-2 py-1 rounded-md"
								>
									<span className="text-content-muted flex items-center gap-1.5">
										<span>{mood}</span>
										<span className="text-content-secondary">{label}</span>
									</span>
									<span className="text-content text-sm">
										{count}/{moods?.length ?? 0}
									</span>
								</li>
							))}
						</ul>
					</div>
					<Button
						onClick={() => generatePDF(targetRef, { filename: "page.pdf" })}
						variant="secondary"
						className="self-center"
					>
						Download PDF
					</Button>
				</Card>
			</div>
		</>
	)
}
