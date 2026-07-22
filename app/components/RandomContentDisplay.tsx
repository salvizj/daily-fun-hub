import Button from "./ui/Button"
import Card from "./ui/Card"

type RandomContentDisplayProps = {
	isLoading: boolean
	error: string | null
	data: string | null
	refetchData: () => void
	randomContentLabel: string
}

const RandomContentDisplay = ({
	isLoading,
	error,
	data,
	refetchData,
	randomContentLabel,
}: RandomContentDisplayProps) => {
	if (error)
		return (
			<Card className="flex flex-col items-center justify-center gap-10 max-w-xl w-full">
				<p className="text-content">{error}</p>
			</Card>
		)
	if (isLoading)
		return (
			<Card className="flex flex-col items-center justify-center gap-10 max-w-xl w-full">
				<p className="text-content">Searching for content...</p>
			</Card>
		)

	return (
		<Card className="flex flex-col items-center justify-center gap-10 max-w-xl w-full">
			<p className="text-content">{data}</p>
			<Button variant="primary" onClick={() => refetchData()}>
				Get a new {randomContentLabel}
			</Button>
		</Card>
	)
}

export default RandomContentDisplay
