import { useEffect, useState } from "react"
import useGenerator from "../hooks/useGenerator"
import Button from "~/components/ui/Button"
import Card from "~/components/ui/Card"

const GeneratorDisplay = ({
	fetchRandomFn,
}: {
	fetchRandomFn: () => Promise<string>
}) => {
	const { isLoading, error, getGeneratorFetch } = useGenerator(fetchRandomFn)
	const [data, setData] = useState<string | null>(null)

	useEffect(() => {
		getGeneratorFetch().then((data) => setData(data || null))
	}, [getGeneratorFetch])

	if (isLoading)
		return <div className="text-content-muted text-sm">Loading...</div>
	if (error) return <div className="text-error text-sm">{error}</div>
	return (
		<Card className="flex flex-col items-center justify-center gap-4 max-w-2xl w-full">
			<p className="text-content">{data}</p>
			<Button
				variant="primary"
				onClick={() =>
					getGeneratorFetch().then((data) => setData(data || null))
				}
			>
				Get a new {fetchRandomFn.name.split(/(?=[A-Z])/)[2].toLocaleLowerCase()}
			</Button>
		</Card>
	)
}

export default GeneratorDisplay
