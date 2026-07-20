import { Laugh, Lightbulb, Target } from "lucide-react"
import { useState } from "react"
import { GeneratorKeys, type Generator } from "../../../types/types"
import Button from "~/components/ui/Button"

type GeneratorPickerProps = {
	selectedGenerator: GeneratorKeys | null
	setSelectedGenerator: (generator: GeneratorKeys) => void
}

const GeneratorPicker = ({
	selectedGenerator,
	setSelectedGenerator,
}: GeneratorPickerProps) => {
	const [localSelectedGenerator, setLocalSelectedGenerator] =
		useState<GeneratorKeys | null>(selectedGenerator)

	const handleGeneratorSelect = (generatorKey: GeneratorKeys) => {
		setLocalSelectedGenerator(generatorKey)
		setSelectedGenerator(generatorKey)
	}

	const GENERATORS: Generator[] = [
		{
			key: GeneratorKeys.FUN,
			label: "Random Fact",
			icon: <Lightbulb />,
		},
		{ key: GeneratorKeys.JOKE, label: "Random Joke", icon: <Laugh /> },
		{
			key: GeneratorKeys.CHALLENGE,
			label: "Daily Challenge",
			icon: <Target />,
		},
	]

	return (
		<div className="flex md:flex-row gap-4 flex-col">
			{GENERATORS.map((generator) => (
				<Button
					key={generator.key}
					variant={
						localSelectedGenerator === generator.key ? "primary" : "secondary"
					}
					onClick={() => handleGeneratorSelect(generator.key)}
					noFocus={true}
				>
					{generator.icon}
					<span className="ml-2">{generator.label}</span>
				</Button>
			))}
		</div>
	)
}
export default GeneratorPicker
