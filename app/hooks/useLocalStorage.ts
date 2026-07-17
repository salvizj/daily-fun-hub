import { useEffect, useState } from "react"

const useLocalStorage = <T>(key: string) => {
	const [storedValue, setStoredValue] = useState<T[] | null>(null)

	useEffect(() => {
		try {
			const item = localStorage.getItem(key)
			setStoredValue(item ? (JSON.parse(item) as T[]) : null)
		} catch (error) {
			console.error(error)
		}
	}, [key])

	const setValue = (value: T) => {
		if (!storedValue) return storedValue
		try {
			setStoredValue((prev) => {
				const updated = [...(prev ?? []), value]
				localStorage.setItem(key, JSON.stringify(updated))
				return updated
			})
		} catch (error) {
			console.error(error)
		}
	}
	const updateValue = (value: T, oldValue: T) => {
		if (!storedValue) return storedValue
		try {
			const updated = storedValue.map((item) =>
				JSON.stringify(item) === JSON.stringify(oldValue) ? value : item,
			)
			setStoredValue(updated)
			localStorage.setItem(key, JSON.stringify(updated))
		} catch (error) {
			console.error(error)
		}
	}

	const deleteValue = (value: T) => {
		if (!storedValue) return storedValue
		try {
			const deleted = storedValue.filter(
				(item) => JSON.stringify(item) !== JSON.stringify(value),
			)
			setStoredValue(deleted)
			localStorage.setItem(key, JSON.stringify(deleted))
		} catch (error) {
			console.error(error)
		}
	}

	const switchValues = (draggedValue: T, targetValue: T) => {
		if (!storedValue) return storedValue
		try {
			let indexA = -1
			let indexB = -1

			for (let i = 0; i < storedValue.length; i++) {
				if (storedValue[i] === draggedValue) indexA = i
				if (storedValue[i] === targetValue) indexB = i
			}
			if (indexA === -1 || indexB === -1) return storedValue
			const updated = [...storedValue]
			;[updated[indexA], updated[indexB]] = [updated[indexB], updated[indexA]]
			setStoredValue(updated)
		} catch (error) {
			console.error(error)
		}
	}
	return { storedValue, setValue, deleteValue, updateValue, switchValues }
}
export default useLocalStorage
