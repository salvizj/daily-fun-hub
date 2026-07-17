import { useMemo } from "react"
import { useSearchParams } from "react-router"

function filterItems<T>(query: string, items: T[]): T[] {
	return items.filter((item) =>
		String(item).toLowerCase().includes(query.toLowerCase()),
	)
}

function useSearch<T>(items: T[]) {
	const [searchParams, setSearchParams] = useSearchParams()
	const query = searchParams.get("search") ?? ""

	const setQuery = (value: string) => {
		setSearchParams((prev) => {
			const newParams = new URLSearchParams(prev)
			if (value) {
				newParams.set("search", value)
			} else {
				newParams.delete("search")
			}
			return newParams
		})
	}

	const results = useMemo(() => filterItems(query, items), [query, items])

	return { query, setQuery, results }
}

export default useSearch
