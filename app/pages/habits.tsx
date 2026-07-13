import type { Route } from "./+types/habits"

export function meta({}: Route.MetaArgs) {
	return [{ title: "Daily Fun Hub" }, { name: "", content: "" }]
}

export default function Habits() {
	return <></>
}
