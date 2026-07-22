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
					<h3 className="text-content-muted">Today's mood</h3>
					<span className="text-md">{todaysMood?.label}</span>
					<span className="text-5xl">{todaysMood?.mood}</span>
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
					<div className="flex flex-row gap-4">
						{sortedMoodByDateDesc.slice(0, 7).map((m, i) => (
							<div key={m.date} className="flex flex-col gap-2 items-center">
								<div className="">{m.label}</div>
								<div className="text-3xl text-shadow-content-secondary">
									{m.mood}
								</div>
								<div className="text-content-muted">Day: {i}</div>
							</div>
						))}
					</div>
				</Card>
			)}
		</div>
	)
}
export default MoodDisplay
