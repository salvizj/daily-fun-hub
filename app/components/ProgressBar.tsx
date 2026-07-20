type ProgressBarProps = {
	percentage: number
}
const ProgressBar = ({ percentage }: ProgressBarProps) => {
	return (
		<div className="max-w-xl w-full">
			<p className="text-center p-2">Current progress: </p>
			<div className="w-full h-10 bg-content-muted flex relative">
				<span
					className={` ${
						percentage < 50
							? "bg-red-500"
							: percentage <= 70
								? "bg-orange-500"
								: "bg-green-500"
					}`}

					style={{ width: `${percentage}%` }}
				></span>
				<p className="absolute inset-0 flex justify-center items-center">
					{percentage} %
				</p>
			</div>
		</div>
	)
}
export default ProgressBar
