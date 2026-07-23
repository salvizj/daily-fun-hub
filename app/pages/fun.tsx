import GeneratorPicker from "~/features/fun/components/GeneratorPicker"
import type { Route } from "./+types/fun"
import { GeneratorKeys } from "~/types/types"
import { useState } from "react"
import { fetchRandomFact } from "~/api/facts"
import { fetchRandomJoke } from "~/api/joke"
import ChallangeDisplay from "~/features/fun/components/ChallangeDisplay"
import RandomContentDisplay from "~/components/RandomContentDisplay"
import useRandomContent from "~/hooks/useRandomContent"
import SectionHeader from "~/components/SectionHeader"

export function meta({}: Route.MetaArgs) {
	return [{ title: "Daily Fun Hub" }, { name: "", content: "" }]
}

const Fun = () => {
	const [selectedGenerator, setSelectedGenerator] =
		useState<GeneratorKeys | null>(null)

	const { isLoading, error, data, refetchData } = useRandomContent(
		selectedGenerator === GeneratorKeys.FUN
			? fetchRandomFact
			: selectedGenerator === GeneratorKeys.JOKE
				? fetchRandomJoke
				: async () => "No generator selected",
	)

	return (
		<>
			<div className="flex flex-col items-center justify-center gap-8 flex-1">
				<SectionHeader
					title={"Daily Fun Hub"}
					subtitle="Daily jokes, facts and challanges."
				/>
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
						<RandomContentDisplay
							isLoading={isLoading}
							error={error}
							data={data}
							refetchData={refetchData}
							randomContentLabel="fact"
						/>
					) : selectedGenerator === GeneratorKeys.JOKE ? (
						<RandomContentDisplay
							isLoading={isLoading}
							error={error}
							data={data}
							refetchData={refetchData}
							randomContentLabel="joke"
						/>
					) : selectedGenerator === GeneratorKeys.CHALLENGE ? (
						<ChallangeDisplay />
					) : null}
				</div>
			</div>
		</>
	)
}
export default Fun
