import { NavLink } from "react-router"
import { House, PartyPopper, ListChecks, Smile, BarChart3 } from "lucide-react"
import { ThemeToggler } from "../ThemeToggler"

type NavBarProps = {
	themeToggle: () => void
}

const NavBar = ({ themeToggle }: NavBarProps) => {
	const PAGES = [
		{ path: "/", icon: <House /> },
		{ path: "/fun", icon: <PartyPopper /> },
		{ path: "/habits", icon: <ListChecks /> },
		{ path: "/mood", icon: <Smile /> },
		{ path: "/stats", icon: <BarChart3 /> },
	]

	return (
		<nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-surface-secondary flex flex-row items-center gap-4 px-4 py-2 border border-border rounded-full z-50">
			{PAGES.map((page) => (
				<NavLink
					key={page.path}
					to={page.path}
					className={({ isActive }) =>
						`flex flex-col items-center px-2 text-xs ${
							isActive ? "text-primary" : "text-content-muted"
						}`
					}
				>
					{page.icon}
				</NavLink>
			))}
			<div className="px-2 flex flex-col justify-center">
				<ThemeToggler themeToggle={themeToggle} />
			</div>
		</nav>
	)
}

export default NavBar
