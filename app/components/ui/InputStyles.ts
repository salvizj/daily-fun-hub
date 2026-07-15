const baseInputStyles = `
  px-3 py-2 rounded-md border bg-surface-elevated text-content
  placeholder:text-content-muted
  focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary
  disabled:opacity-50 disabled:cursor-not-allowed
  transition-colors
`

const fileInputStyles = `
  file:mr-3 file:py-1.5 file:px-3
  file:rounded-md file:border-0
  file:bg-secondary file:text-white
  file:cursor-pointer
`

const checkboxInputStyles = `
  w-4 h-4 rounded
  accent-primary
  cursor-pointer
`

export const getInputClassName = (type: string, hasError: boolean) => {
	const borderStyle = hasError ? "border-error" : "border-border"
	const typeStyle =
		type === "file"
			? fileInputStyles
			: type === "checkbox"
				? checkboxInputStyles
				: ""

	return `${baseInputStyles} ${borderStyle} ${typeStyle}`
}
