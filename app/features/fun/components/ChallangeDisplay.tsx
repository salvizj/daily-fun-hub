import Card from "~/components/ui/Card"

const ChallangeDisplay = () => {
	const ACTIVITIES = [
		"go for a walk",
		"go for a swim",
		"go for a run",
		"ride a bike",
		"take a hike",
		"have a dance session",
		"practice yoga",
		"meditate",
		"stretch it out",
		"paint something",
		"sketch something",
		"write for a bit",
		"read a few chapters",
		"cook something new",
		"bake something sweet",
		"do some gardening",
		"declutter a space",
		"journal your thoughts",
		"call an old friend",
		"learn a new word",
		"try a new recipe",
	]

	const DURATIONS = [
		"for 5 minutes",
		"for 10 minutes",
		"for 15 minutes",
		"for 20 minutes",
		"for 30 minutes",
		"for 45 minutes",
		"for a full hour",
	]

	const PLACES = [
		"in the park",
		"at the beach",
		"in the mountains",
		"in the forest",
		"somewhere in the city",
		"out in the countryside",
		"at home",
		"at the gym",
		"in your favorite studio",
		"in your backyard",
		"on a rooftop",
	]

	const getDaySeed = () => {
		const today = new Date()
		const dateString = `${today.getFullYear()}${today.getMonth()}${today.getDate()}`
		return Number(dateString)
	}

	const seededRandom = (seed: number) => {
		const x = Math.sin(seed) * 10000
		return x - Math.floor(x)
	}

	const generateChallenge = () => {
		const seed = getDaySeed()

		const randomActivity =
			ACTIVITIES[Math.floor(seededRandom(seed) * ACTIVITIES.length)]
		const randomDuration =
			DURATIONS[Math.floor(seededRandom(seed + 1) * DURATIONS.length)]
		const randomPlace =
			PLACES[Math.floor(seededRandom(seed + 2) * PLACES.length)]

		return `Your challange: ${randomActivity} ${randomDuration} ${randomPlace}.`
	}

	const challenge = generateChallenge()

	return (
		<Card className="flex flex-col items-center justify-center gap-4 max-w-2xl w-full">
			<p className="text-content">{challenge}</p>
		</Card>
	)
}

export default ChallangeDisplay
