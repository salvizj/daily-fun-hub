import { useEffect, useState } from "react"
import useGenerator from "../hooks/useGenerator"
import { fetchRandomJoke } from "~/api/joke"

const JokeDisplay = () => {
	const { isLoading, error, getGeneratorFetch } = useGenerator(fetchRandomJoke)
	const [joke, setJoke] = useState<string | null>(null)

	useEffect(() => {
		getGeneratorFetch().then((joke) => setJoke(joke || null))
	}, [getGeneratorFetch])

	if (isLoading)
		return <div className="text-content-muted text-sm">Loading...</div>
	if (error) return <div className="text-error text-sm">{error}</div>
	return <p className="text-content">{joke}</p>
}

export default JokeDisplay
