import GeneratorPicker from "~/features/fun/components/GeneratorPicker"
import type { Route } from "./+types/fun"
import { GeneratorKeys, type Generator } from "~/types/types"
import { useState } from "react"
import { fetchRandomFact } from "~/api/facts"
import { fetchRandomJoke } from "~/api/joke"
import GeneratorDisplay from "~/features/fun/components/GeneratorDisplay"
import ChallangeDisplay from "~/features/fun/components/ChallangeDisplay"

export function meta({}: Route.MetaArgs) {
	return [{ title: "Daily Fun Hub" }, { name: "", content: "" }]
}

export default function Fun() {
	const [selectedGenerator, setSelectedGenerator] =
		useState<GeneratorKeys | null>(null)
	return (
		<>
			<div className="flex flex-col items-center justify-center gap-8 flex-1">
				<div className="text-center mb-2">
					<h1 className="text-2xl font-bold text-content">Daily Fun Hub</h1>
					<p className="text-content-muted text-sm mt-1">
						Facts, jokes, and daily challenges.
					</p>
				</div>
				<GeneratorPicker
					selectedGenerator={selectedGenerator}
					setSelectedGenerator={setSelectedGenerator}
				/>
				<div className="flex flex-col items-center justify-center gap-4 w-full">
					{selectedGenerator === null ? (
						<div className="text-content-muted text-sm">
							Please select a generator to get started.
						</div>
					) : selectedGenerator === GeneratorKeys.FUN ? (
						<GeneratorDisplay fetchRandomFn={fetchRandomFact} />
					) : selectedGenerator === GeneratorKeys.JOKE ? (
						<GeneratorDisplay fetchRandomFn={fetchRandomJoke} />
					) : selectedGenerator === GeneratorKeys.CHALLENGE ? (
						<ChallangeDisplay />
					) : null}
				</div>
			</div>
		</>
	)
}
