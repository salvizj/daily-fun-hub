import type { Route } from "./+types/mood"

export function meta({}: Route.MetaArgs) {
	return [{ title: "Daily Fun Hub" }, { name: "", content: "" }]
}

export default function Mood() {
	return <></>
}
