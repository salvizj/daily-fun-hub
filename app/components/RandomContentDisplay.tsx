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
	if (isLoading)
		return <div className="text-content-muted text-sm">Loading...</div>
	if (error) return <div className="text-error text-sm">{error}</div>
	return (
		<Card className="flex flex-col items-center justify-center gap-4 max-w-2xl w-full">
			<p className="text-content">{data}</p>
			<Button variant="primary" onClick={() => refetchData()}>
				Get a new {randomContentLabel}
			</Button>
		</Card>
	)
}

export default RandomContentDisplay
