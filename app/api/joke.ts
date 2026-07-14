export async function fetchRandomJoke(): Promise<string> {
	const res = await fetch("https://official-joke-api.appspot.com/jokes/random")
	if (!res.ok) throw new Error("Failed to fetch a random joke")
	const data = await res.json()
	return `${data.setup} — ${data.punchline}`
}
