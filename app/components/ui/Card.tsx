type CardProps = {
	children: React.ReactNode
	className?: string
}

const Card = ({ children, className = "" }: CardProps) => {
	return (
		<div
			className={`rounded-2xl border border-border bg-surface-elevated p-6 min-w-xl ${className}`}
		>
			{children}
		</div>
	)
}

export default Card
