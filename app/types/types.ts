type BaseField = {
	name: string
	label: string
	placeholder?: string
	error?: string
}

type TextFieldConfig = BaseField & {
	type: "text" | "email" | "date" | "number"
	value: string
	onChange: (value: string) => void
}

type SelectFieldConfig = BaseField & {
	type: "select"
	options: string[]
	value: string
	onChange: (value: string) => void
}

type FileFieldConfig = BaseField & {
	type: "file"
	onChange: (file: File | null) => void
}

export type FieldConfig = TextFieldConfig | SelectFieldConfig | FileFieldConfig

export type Variant =
	"primary" | "secondary" | "accent" | "outline" | "ghost" | "danger"

export enum Theme {
	LIGHT = "light",
	DARK = "dark",
}

export type Generator = {
	key: GeneratorKeys
	label: string
	icon: React.ReactNode
}

export enum GeneratorKeys {
	FUN = "fun",
	JOKE = "joke",
	CHALLENGE = "challenge",
}
