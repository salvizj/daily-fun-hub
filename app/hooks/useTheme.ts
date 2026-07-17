import { useEffect, useState } from "react"
import { Theme } from "~/types/types"
import { setCookie } from "~/utils/cookie"

const toggleDocumentClass = (theme: Theme) => {
	if (theme === Theme.DARK) {
		document.documentElement.classList.add("dark")
	} else {
		document.documentElement.classList.remove("dark")
	}
}

const useTheme = (initialTheme: Theme) => {
	const [theme, setTheme] = useState<Theme>(initialTheme)

	useEffect(() => {
		toggleDocumentClass(theme)
		setCookie("theme", theme, 365)
	}, [theme])

	const themeToggle = () => {
		setTheme((prev) => (prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT))
	}

	return { theme, themeToggle }
}
export default useTheme
