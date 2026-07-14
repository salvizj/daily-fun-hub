export async function fetchRandomQuote(): Promise<string> {
	const res = await fetch("https://dummyjson.com/quotes/random")
	if (!res.ok) throw new Error("Failed to fetch quote")
	const data = await res.json()
	return `"${data.quote}" — ${data.author}`
}
