import { type RouteConfig, index, route } from "@react-router/dev/routes"

export default [
	index("pages/dashboard.tsx"),
	route("fun", "pages/fun.tsx"),
	route("habits", "pages/habits.tsx"),
	route("mood", "pages/mood.tsx"),
	route("stats", "pages/stats.tsx"),
	route("profile", "pages/profile.tsx"),
] satisfies RouteConfig
