import type { Route } from "./+types/stats"

export function meta({}: Route.MetaArgs) {
	return [{ title: "Daily Fun Hub" }, { name: "", content: "" }]
}

export default function Stats() {
	return <></>
}
