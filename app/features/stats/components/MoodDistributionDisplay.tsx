import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts"
import type { MoodEmoji } from "~/types/types"
type MoodDistributionDisplayProps = {
	data: { mood: MoodEmoji; label: string; count: number }[]
	title?: string
}
const MoodDistributionDisplay = ({
	data,
	title,
}: MoodDistributionDisplayProps) => {
	return (
		<div
			style={{
				width: "100%",
				maxWidth: "700px",
				height: "100%",
				maxHeight: "70vh",
				aspectRatio: 1.618,
			}}
		>
			{title && <h3 className="text-center mb-4">{title}</h3>}
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					data={data}
					margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="mood" stroke="var(--color-content-secondary)" />
					<YAxis width="auto" stroke="var(--color-content-secondary)" />
					<Tooltip
						cursor={{ stroke: "var(--color-border)" }}
						contentStyle={{
							backgroundColor: "var(--color-surface)",
							borderColor: "var(--color-border)",
						}}
					/>
					<Line
						type="monotone"
						dataKey="count"
						stroke="var(--color-primary)"
						dot={{ fill: "var(--color-primary-light)" }}
						activeDot={{ r: 4, stroke: "var(--color-accent)" }}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	)
}
export default MoodDistributionDisplay
