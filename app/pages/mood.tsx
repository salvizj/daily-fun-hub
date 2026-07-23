import SectionHeader from "~/components/SectionHeader"
import type { Route } from "./+types/mood"
import { useState } from "react"
import { ModalType } from "~/types/types"
import MoodForm from "~/features/mood/components/MoodForm"
import type { Mood, MoodEmoji } from "~/types/types"
import type { MoodSchema } from "~/schemas/moodSchema"
import { MOODS } from "~/constants/constants"
import MoodDisplay from "~/features/mood/components/MoodDisplay"
import useLocalStorage from "~/hooks/useLocalStorage"
export function meta({}: Route.MetaArgs) {
	return [{ title: "Daily Fun Hub" }, { name: "", content: "" }]
}

const Mood = () => {
	const [openModal, setOpenModal] = useState<ModalType | null>(null)
	const { storedValue, setValue } = useLocalStorage<Mood[]>("moods")

	const todaysDate = new Date().toISOString().slice(0, 10)
	const handleSubmit = (mood: MoodSchema) => {
		const matchedMood = MOODS.find((m) => m.mood === mood.mood)
		const newMood: Mood = {
			mood: mood.mood as MoodEmoji,
			label: matchedMood?.label ?? "",
			date: todaysDate,
		}
		setValue(newMood)
		setOpenModal(null)
	}
	return (
		<>
			<div className="flex flex-col items-center justify-center gap-8 flex-1">
				<SectionHeader title={"Daily Mood Hub"} subtitle="Mood" />
				<MoodForm
					isOpen={openModal === ModalType.MoodForm}
					onClose={() => setOpenModal(null)}
					onSubmit={handleSubmit}
				/>
				<MoodDisplay
					moods={storedValue ?? []}
					setOpenModal={() => setOpenModal(ModalType.MoodForm)}
					todaysDate={todaysDate}
				/>
			</div>
		</>
	)
}
export default Mood
