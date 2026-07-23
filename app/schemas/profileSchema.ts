import { z } from "zod"
import { isSafeString } from "./utils"

const safeString = (message = "Invalid characters detected") =>
	z.string().refine(isSafeString, { message })

export const profileSchema = z.object({
	name: safeString().min(2, "Name must be at least 2 characters"),
})

export type ProfileSchema = z.infer<typeof profileSchema>
