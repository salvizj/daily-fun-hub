import ProfileForm from "~/features/profile/components/ProfileForm"
import type { Route } from "./+types/profile"
import { useEffect, useState } from "react"
import { ModalType } from "~/types/types"
import type { ProfileSchema } from "~/schemas/profileSchema"
import useLocalStorage from "~/hooks/useLocalStorage"

export function meta({}: Route.MetaArgs) {
	return [{ title: "Daily Fun Hub" }, { name: "", content: "" }]
}

const Profile = () => {
	const [openModal, setOpenModal] = useState<ModalType | null>(null)
	const { storedValue, setValue } = useLocalStorage<ProfileSchema>("profile")

	const handleSubmit = (data: ProfileSchema) => {
		setValue(data)
		setOpenModal(null)
	}

	useEffect(() => {
		if (storedValue.length === 0) {
			setOpenModal(ModalType.ProfileForm)
		}
	}, [storedValue])

	if (storedValue.length !== 0) {
		return (
			<div className="flex justify-center items-center h-screen w-screen">
				<h2 className="text-center">
					Welcome
					<span className="text-content-secondary ml-2">
						{storedValue[0].name}
					</span>
				</h2>
			</div>
		)
	}

	return (
		<div>
			<ProfileForm
				isOpen={openModal === ModalType.ProfileForm}
				onClose={() => setOpenModal(null)}
				onSubmit={handleSubmit}
			/>
		</div>
	)
}
export default Profile
