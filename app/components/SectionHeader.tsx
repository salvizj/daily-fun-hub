type SectionHeaderProps = {
	title: string
	subtitle?: string
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
	return (
		<div className="text-center mb-2">
			<h2 className="text-2xl font-bold text-content ">{title}</h2>
			{subtitle && (
				<p className="text-content-muted text-sm mt-1">{subtitle}</p>
			)}
		</div>
	)
}

export default SectionHeader
