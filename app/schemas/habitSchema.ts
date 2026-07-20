import { z } from "zod"
import { isSafeString } from "./utils"
import type { Habit } from "~/types/types"

const safeString = (message = "Invalid characters detected") =>
	z.string().refine(isSafeString, { message })

export const createHabitSchema = (storedValue?: Habit[]) =>
	z.object({
		habit: safeString()
			.min(2, "Habit must be at least 2 characters")
			.refine((value) => !storedValue?.some((item) => item.habit === value), {
				message: "This habit already exists",
			}),
	})
export type HabitSchema = z.infer<typeof createHabitSchema>
