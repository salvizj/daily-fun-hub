import { z } from "zod"
import { isSafeString } from "./utils"

const safeString = (message = "Invalid characters detected") =>
	z.string().refine(isSafeString, { message })

export const habitSchema = z.object({
	habit: safeString().min(2, "Habit must be at least 2 characters"),
})

export type HabitSchema = z.infer<typeof habitSchema>
