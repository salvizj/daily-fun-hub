import { useEffect, useState } from "react"
import useGenerator from "../hooks/useGenerator"
import { fetchRandomFact } from "~/api/facts"

const FactDisplay = () => {
	const { isLoading, error, getGeneratorFetch } = useGenerator(fetchRandomFact)
	const [fact, setFact] = useState<string | null>(null)

	useEffect(() => {
		getGeneratorFetch().then((fact) => setFact(fact || null))
	}, [getGeneratorFetch])

	if (isLoading)
		return <div className="text-content-muted text-sm">Loading...</div>
	if (error) return <div className="text-error text-sm">{error}</div>
	return <p className="text-content">{fact}</p>
}

export default FactDisplay
