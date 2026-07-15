import { z } from "zod"
import { isSafeString } from "./utils"

const safeString = (message = "Invalid characters detected") =>
	z.string().refine(isSafeString, { message })

export const goalSchema = z.object({
	goal: safeString().min(2, "Goal must be at least 2 characters"),
})

export type GoalSchema = z.infer<typeof goalSchema>
