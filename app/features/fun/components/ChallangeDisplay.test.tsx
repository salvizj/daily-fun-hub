import { render } from "@testing-library/react"
import ChallangeDisplay from "./ChallangeDisplay"
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest"

describe("challange display", () => {
	beforeEach(() => {
		vi.useFakeTimers()
	})

	afterEach(() => {
		vi.useRealTimers()
	})

	test("shows different challange on different day", () => {
		const date_1 = new Date(2003, 2, 16)
		const date_2 = new Date(2009, 9, 24)

		vi.setSystemTime(date_1)
		const { unmount, getByText } = render(<ChallangeDisplay />)
		const challange_1 = getByText(/Your challange:/i).textContent
		unmount()

		vi.setSystemTime(date_2)
		const { getByText: getByText_2 } = render(<ChallangeDisplay />)
		const challange_2 = getByText_2(/Your challange:/i).textContent

		expect(challange_1).not.toBe(challange_2)
	})

	test("shows the same challange on the same day", () => {
		const date = new Date(2003, 2, 16)

		vi.setSystemTime(date)
		const { unmount, getByText } = render(<ChallangeDisplay />)
		const challange_1 = getByText(/Your challange:/i).textContent
		unmount()

		const { getByText: getByText_2 } = render(<ChallangeDisplay />)
		const challange_2 = getByText_2(/Your challange:/i).textContent

		expect(challange_1).toBe(challange_2)
	})
})
