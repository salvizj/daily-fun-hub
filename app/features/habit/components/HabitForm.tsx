import { useState } from "react"
import Form from "~/components/ui/Form"
import type { FieldConfig, Habit } from "~/types/types"
import type { z } from "zod"
import Modal from "~/components/ui/Model"
import { createHabitSchema, type HabitSchema } from "~/schemas/habitSchema"

type HabitFormProps = {
	isOpen: boolean
	onClose: () => void
	onSubmit: (data: HabitSchema) => void
	habits: Habit[]
}

const HabitForm = ({ isOpen, onClose, onSubmit, habits }: HabitFormProps) => {
	const [habit, setHabit] = useState("")
	const [validationErrors, setValidationErrors] = useState<
		Record<string, string>
	>({})

	const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault()
		setValidationErrors({})

		const formData = { habit }
		const result = createHabitSchema(habits).safeParse(formData)

		if (!result.success) {
			const fieldErrors = Object.fromEntries(
				result.error.issues.map((issue: z.core.$ZodIssue) => [
					String(issue.path[0]),
					issue.message,
				]),
			)
			setValidationErrors(fieldErrors)
			return
		}

		setHabit("")
		onSubmit(result.data)
	}

	const fields: FieldConfig[] = [
		{
			name: "habit",
			label: "Habit",
			type: "text",
			placeholder: "Habit",
			value: habit,
			onChange: setHabit,
			error: validationErrors.habit,
		},
	]

	return (
		<Modal isOpen={isOpen} onClose={onClose} title="Add Habit">
			<Form fields={fields} onSubmit={handleSubmit} submitLabel={"Add Habit"} />
		</Modal>
	)
}
export default HabitForm
