import { Theme } from "~/types/types"

export function getTheme(request: Request): Theme {
	const cookieHeader = request.headers.get("Cookie") || ""
	const match = cookieHeader.match(/(?:^|; )theme=([^;]*)/)
	return match?.[1] === "dark" ? Theme.DARK : Theme.LIGHT
}
