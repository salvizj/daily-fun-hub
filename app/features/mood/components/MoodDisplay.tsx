import Button from "~/components/ui/Button"
import Card from "~/components/ui/Card"
import { ModalType, type Mood } from "~/types/types"

type GoalsDisplayProps = {
	moods: Mood[] | null
	todaysDate: string
	setOpenModal: (modalType: ModalType) => void
}

const MoodDisplay = ({
	moods,
	setOpenModal,
	todaysDate,
}: GoalsDisplayProps) => {
	const todaysMood = moods?.find((mood) => mood.date === todaysDate)
	return (
		<div className="flex flex-col items-center justify-center w-full gap-4">
			{todaysMood !== undefined ? (
				<p>Today's mood: {todaysMood?.mood}</p>
			) : (
				<Button onClick={() => setOpenModal(ModalType.MoodForm)} noFocus={true}>
					Add Mood
				</Button>
			)}

			{moods !== null && moods.length > 0 && (
				<Card className="flex flex-col gap-2 w-full max-w-md border border-border p-4 rounded-2xl bg-surface-elevated">
					{moods.map((mood) => (
						<div
							key={mood.date ?? mood.date}
							className="flex flex-row items-center gap-2 justify-between"
						>
							<span>{mood.mood}</span>
							<span className="text-content-muted text-sm">{mood.date}</span>
						</div>
					))}
				</Card>
			)}
		</div>
	)
}
export default MoodDisplay
