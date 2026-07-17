import { useMemo, useState } from "react"

function filterItems<T>(query: string, items: T[]): T[] {
	return items.filter((item) =>
		String(item).toLowerCase().includes(query.toLowerCase()),
	)
}

function useSearch<T>(items: T[]) {
	const [query, setQuery] = useState("")

	const results = useMemo(() => filterItems(query, items), [query, items])

	return { query, setQuery, results }
}

export default useSearch
