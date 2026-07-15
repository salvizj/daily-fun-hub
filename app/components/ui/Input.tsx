import { getInputClassName } from "./InputStyles"

type InputProps = {
	label?: string
	error?: string
	type: string
	placeholder: string
	required?: boolean
	value?: string
	checked?: boolean
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
	label,
	error,
	type,
	placeholder,
	required = false,
	value,
	onChange,
	checked,
}: InputProps) => {
	return (
		<div className="flex flex-col gap-1">
			{label && (
				<label
					htmlFor={`input-${label}`}
					className="text-sm font-medium text-content-secondary"
				>
					{label}
				</label>
			)}
			<input
				id={`input-${label}`}
				type={type}
				className={getInputClassName(type, !!error)}
				placeholder={placeholder}
				required={required ?? false}
				value={value}
				checked={checked}
				onChange={onChange}
			/>
			{error && <span className="text-xs text-error">{error}</span>}
		</div>
	)
}
export default Input
