import { useState } from "react"
import Form from "~/components/ui/Form"
import type { FieldConfig } from "~/types/types"
import type { z } from "zod"
import Modal from "~/components/ui/Model"
import { goalSchema, type GoalSchema } from "~/schemas/goalsSchema"

type GoalsFormProps = {
	isOpen: boolean
	onClose: () => void
	onSubmit: (data: GoalSchema) => void
}

const GoalsForm = ({ isOpen, onClose, onSubmit }: GoalsFormProps) => {
	const [goal, setGoal] = useState("")
	const [validationErrors, setValidationErrors] = useState<
		Record<string, string>
	>({})

	const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault()
		setValidationErrors({})

		const formData = { goal }
		const result = goalSchema.safeParse(formData)

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

		setValidationErrors({})
		setGoal("")
		onSubmit(result.data)
	}

	const fields: FieldConfig[] = [
		{
			name: "goal",
			label: "Goal",
			type: "text",
			placeholder: "Goal",
			value: goal,
			onChange: setGoal,
			error: validationErrors.goal,
		},
	]

	return (
		<Modal isOpen={isOpen} onClose={onClose} title="Add Goal">
			<Form fields={fields} onSubmit={handleSubmit} submitLabel={"Add Goal"} />
		</Modal>
	)
}
export default GoalsForm
