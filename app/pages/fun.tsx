import type { Route } from "./+types/fun"

export function meta({}: Route.MetaArgs) {
	return [{ title: "Daily Fun Hub" }, { name: "", content: "" }]
}

export default function Fun() {
	return <></>
}
