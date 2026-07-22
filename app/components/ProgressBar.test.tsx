import { describe, expect, test } from "vitest"
import { render, screen } from "@testing-library/react"
import ProgressBar from "./ProgressBar"

type ProgressBarProps = {
	percentage: number
}

const defaultProps = (
	over: Partial<ProgressBarProps> = {},
): ProgressBarProps => ({
	percentage: 50,
	...over,
})

describe("progress bar", () => {
	test("renders the percentage text", () => {
		const props = defaultProps({ percentage: 42 })
		render(<ProgressBar {...props} />)

		expect(screen.getByText("42 %")).toBeInTheDocument()
	})

	test("sets the bar width to match percentage", () => {
		const props = defaultProps({ percentage: 65 })
		const { container } = render(<ProgressBar {...props} />)

		const bar = container.querySelector("span")
		expect(bar).toHaveStyle({ width: "65%" })
	})

	test("uses red when percentage is below 50", () => {
		const props = defaultProps({ percentage: 49 })
		const { container } = render(<ProgressBar {...props} />)

		expect(container.querySelector("span")).toHaveClass("bg-red-500")
	})

	test("uses orange when percentage is between 50 and 70 inclusive", () => {
		const props = defaultProps({ percentage: 70 })
		const { container } = render(<ProgressBar {...props} />)

		expect(container.querySelector("span")).toHaveClass("bg-orange-500")
	})

	test("uses green when percentage is above 70", () => {
		const props = defaultProps({ percentage: 71 })
		const { container } = render(<ProgressBar {...props} />)

		expect(container.querySelector("span")).toHaveClass("bg-green-500")
	})
})
