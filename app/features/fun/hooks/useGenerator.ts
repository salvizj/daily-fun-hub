import { useCallback, useState } from "react"

const useGenerator = (fetchRandomFn: () => Promise<string>) => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [error, setError] = useState<string | null>(null)

	const getGeneratorFetch = useCallback(async () => {
		setIsLoading(true)
		setError(null)
		try {
			return await fetchRandomFn()
		} catch (err) {
			setError((err as Error).message)
			return null
		} finally {
			setIsLoading(false)
		}
	}, [fetchRandomFn])

	return { isLoading, error, getGeneratorFetch }
}
export default useGenerator
