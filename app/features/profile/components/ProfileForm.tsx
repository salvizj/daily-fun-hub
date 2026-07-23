import { useState } from "react"
import Form from "~/components/ui/Form"
import type { FieldConfig } from "~/types/types"
import type { z } from "zod"
import Modal from "~/components/ui/Model"
import { profileSchema, type ProfileSchema } from "~/schemas/profileSchema"

type ProfileFormProps = {
	isOpen: boolean
	onClose: () => void
	onSubmit: (data: ProfileSchema) => void
}

const ProfileForm = ({ isOpen, onClose, onSubmit }: ProfileFormProps) => {
	const [name, setName] = useState("")
	const [validationErrors, setValidationErrors] = useState<
		Record<string, string>
	>({})

	const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault()
		setValidationErrors({})

		const formData = { name }
		const result = profileSchema.safeParse(formData)

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
		setName("")
		onSubmit(result.data)
	}

	const fields: FieldConfig[] = [
		{
			name: "name",
			label: "Name",
			type: "text",
			placeholder: "Name",
			value: name,
			onChange: setName,
			error: validationErrors.name,
		},
	]

	return (
		<Modal isOpen={isOpen} onClose={onClose} title="Add name">
			<Form fields={fields} onSubmit={handleSubmit} submitLabel={"Add Name"} />
		</Modal>
	)
}
export default ProfileForm
