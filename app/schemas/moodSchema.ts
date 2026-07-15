import { z } from "zod"

import { isSafeString } from "./utils"
const safeString = (message = "Invalid characters detected") =>
	z.string().refine(isSafeString, { message })

export const moodSchema = z.object({
	mood: safeString().min(1, "Please select a mood"),
})

export type MoodSchema = z.infer<typeof moodSchema>
