import { useState } from "react"

const useDragSwitch = <T>(switchValues: (dragged: T, target: T) => void) => {
	const [draggingItem, setDraggingItem] = useState<T | null>(null)

	const handleDragStart = (item: T) => {
		setDraggingItem(item)
	}

	const handleDragOver = (e: React.DragEvent) => {
		e.preventDefault()
	}

	const handleOnDrop = (targetItem: T) => {
		if (draggingItem === null) return
		if (draggingItem === targetItem) return

		switchValues(draggingItem, targetItem)
		setDraggingItem(null)
	}

	const handleOnDragEnd = () => {
		setDraggingItem(null)
	}

	return {
		draggingItem,
		handleDragStart,
		handleDragOver,
		handleOnDrop,
		handleOnDragEnd,
	}
}
export default useDragSwitch
