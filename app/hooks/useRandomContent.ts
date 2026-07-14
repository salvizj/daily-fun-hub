import { useCallback, useEffect, useState } from "react"

const useRandomContent = (fetchRandomFn: () => Promise<string>) => {
	const [data, setData] = useState<string | null>(null)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [error, setError] = useState<string | null>(null)

	const refetchData = useCallback(async () => {
		setIsLoading(true)
		setError(null)
		try {
			const result = await fetchRandomFn()
			setData(result)
		} catch (err) {
			setError((err as Error).message)
		} finally {
			setIsLoading(false)
		}
	}, [fetchRandomFn])

	useEffect(() => {
		refetchData()
	}, [refetchData])

	return { data, isLoading, error, refetchData }
}

export default useRandomContent
