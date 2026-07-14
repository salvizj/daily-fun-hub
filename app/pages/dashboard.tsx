import type { Route } from "./+types/home"
import { fetchRandomQuote } from "~/api/quotes"
import RandomContentDisplay from "~/components/RandomContentDisplay"
import useRandomContent from "~/hooks/useRandomContent"

export function meta({}: Route.MetaArgs) {
	return [{ title: "Daily Fun Hub" }, { name: "", content: "" }]
}

export default function Home() {
	const { isLoading, error, data, refetchData } =
		useRandomContent(fetchRandomQuote)
	return (
		<>
			<div className="flex flex-col items-center justify-center gap-8 flex-1">
				<div className="text-center mb-2">
					<h1 className="text-2xl font-bold text-content">Daily Fun Hub</h1>
					<p className="text-content-muted text-sm mt-1">
						Daily quotes and todays goals.
					</p>
				</div>
				<div className="flex flex-col items-center justify-center gap-4 w-full">
					<RandomContentDisplay
						isLoading={isLoading}
						error={error}
						data={data}
						refetchData={refetchData}
						randomContentLabel="quote"
					/>
				</div>
			</div>
		</>
	)
}
