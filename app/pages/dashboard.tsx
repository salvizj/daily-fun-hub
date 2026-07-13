import type { Route } from "./+types/home"

export function meta({}: Route.MetaArgs) {
	return [{ title: "Daily Fun Hub" }, { name: "", content: "" }]
}

export default function Home() {
	return <></>
}
