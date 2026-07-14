import { useEffect, useState } from "react"
import useGenerator from "../hooks/useGenerator"

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
	return <p className="text-content">{data}</p>
}

export default GeneratorDisplay
