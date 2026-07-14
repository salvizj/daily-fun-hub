export async function fetchRandomFact(): Promise<string> {
	const res = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
	if (!res.ok) throw new Error("Failed to fetch a random fact")
	const data = await res.json()
	return data.text
}
