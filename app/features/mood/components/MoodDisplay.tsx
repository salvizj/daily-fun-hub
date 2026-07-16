import SectionHeader from "~/components/SectionHeader"
import Button from "~/components/ui/Button"
import Card from "~/components/ui/Card"
import { ModalType, type Mood } from "~/types/types"

type GoalsDisplayProps = {
	moods: Mood[]
	todaysDate: string
	setOpenModal: (modalType: ModalType) => void
}

const MoodDisplay = ({
	moods,
	setOpenModal,
	todaysDate,
}: GoalsDisplayProps) => {
	const todaysMood = moods?.find((m) => m.date === todaysDate)
	const sortedMoodByDateDesc: Mood[] =
		moods.sort(
			(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
		) ?? []

	return (
		<div className="flex flex-col items-center justify-center w-full gap-4">
			{todaysMood !== undefined ? (
				<div className="flex flex-col items-center gap-1">
					<span className="text-5xl">{todaysMood?.mood}</span>
					<p className="text-content-muted text-sm">Today's mood</p>
				</div>
			) : (
				<Button onClick={() => setOpenModal(ModalType.MoodForm)} noFocus={true}>
					Add Mood
				</Button>
			)}

			{sortedMoodByDateDesc !== null && sortedMoodByDateDesc.length > 0 && (
				<Card
					className="flex flex-col gap-2 w-full max-w-md border border-border p-4 rounded-2xl bg-surface-elevated"
					title="Mood over last 7 days:"
				>
					{sortedMoodByDateDesc.slice(0, 7).map((m) => (
						<div
							key={m.date}
							className="flex flex-row items-center gap-2 justify-between"
						>
							<span className="text-2xl">{m.mood}</span>
							<span className="text-content-muted text-sm">{m.date}</span>
						</div>
					))}
				</Card>
			)}
		</div>
	)
}
export default MoodDisplay
