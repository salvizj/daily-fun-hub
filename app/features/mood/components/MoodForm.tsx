// features/mood/components/MoodForm.tsx
import { useState } from "react"
import Modal from "~/components/ui/Model"
import Button from "~/components/ui/Button"
import { moodSchema, type MoodSchema } from "~/schemas/moodSchema"
import { MOODS } from "~/constants/constants"

type MoodFormProps = {
	isOpen: boolean
	onClose: () => void
	onSubmit: (data: MoodSchema) => void
}

const MoodForm = ({ isOpen, onClose, onSubmit }: MoodFormProps) => {
	const [selectedMood, setSelectedMood] = useState("")
	const [error, setError] = useState<string | null>(null)

	const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault()
		setError(null)

		const result = moodSchema.safeParse({ mood: selectedMood })

		if (!result.success) {
			setError(result.error.issues[0]?.message ?? "Invalid mood")
			return
		}
		setSelectedMood("")
		onSubmit(result.data)
	}
	return (
		<Modal isOpen={isOpen} onClose={onClose} title="Rate today's mood">
			<form onSubmit={handleSubmit} className="flex flex-col gap-4">
				<div className="flex justify-center gap-3">
					{MOODS.map((mood) => (
						<Button
							key={mood.mood}
							onClick={() => setSelectedMood(mood.mood)}
							variant={selectedMood === mood.mood ? "primary" : "outline"}
							className={`flex flex-row gap-2 p-2 items-center border ${
								error ? "border-error" : ""
							}`}
							noFocus={true}
							noPadding={true}
						>
							<span className="text-3xl">{mood.mood}</span>
							<span
								className={`text-xs ${
									selectedMood === mood.mood
										? " text-surface"
										: "text-content-muted"
								}`}
							>
								{mood.label}
							</span>
						</Button>
					))}
				</div>

				{error && <p className="text-error text-sm text-center">{error}</p>}

				<Button
					type="submit"
					variant="primary"
					className="self-center"
					noFocus={true}
				>
					Rate
				</Button>
			</form>
		</Modal>
	)
}

export default MoodForm
