type CardProps = {
	title?: string
	children: React.ReactNode
	className?: string
}

const Card = ({ title, children, className = "" }: CardProps) => {
	return (
		<div
			className={`rounded-2xl border border-border bg-surface-elevated p-6 min-w-xl ${className}`}
		>
			{title && (
				<h3 className="text-lg font-bold text-content mb-3 text-center">
					{title}
				</h3>
			)}
			{children}
		</div>
	)
}

export default Card
