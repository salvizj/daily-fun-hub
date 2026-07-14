import GeneratorPicker from "~/features/fun/components/GeneratorPicker"
import type { Route } from "./+types/fun"
import { GeneratorKeys, type Generator } from "~/types/types"
import { useState } from "react"
import FactDisplay from "~/features/fun/components/FactDisplay"
import JokeDisplay from "~/features/fun/components/JokeDisplay"

export function meta({}: Route.MetaArgs) {
	return [{ title: "Daily Fun Hub" }, { name: "", content: "" }]
}

export default function Fun() {
	const [selectedGenerator, setSelectedGenerator] =
		useState<GeneratorKeys | null>(null)
	console.log("Selected Generator:", selectedGenerator) // Debugging line

	return (
		<>
			<div className="flex flex-col items-center justify-center gap-4">
				<GeneratorPicker
					selectedGenerator={selectedGenerator}
					setSelectedGenerator={setSelectedGenerator}
				/>
				{selectedGenerator === null ? (
					<div className="text-content-muted text-sm">
						Please select a generator to get started.
					</div>
				) : selectedGenerator === GeneratorKeys.FUN ? (
					<FactDisplay />
				) : selectedGenerator === GeneratorKeys.JOKE ? (
					<JokeDisplay />
				) : selectedGenerator === GeneratorKeys.CHALLENGE ? (
					<FactDisplay />
				) : null}
			</div>
		</>
	)
}
