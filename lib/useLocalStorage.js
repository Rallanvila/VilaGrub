import { useState, useEffect, useContext } from "react";
import { CartContext } from "./context";

function getStorageValue(key, defaultValue) {
	// getting stored value
	if (typeof window !== "undefined") {
		const saved = localStorage.getItem(key);
		const initial = saved !== null ? JSON.parse(saved) : defaultValue;
		return initial;
	}
}

export const useLocalStorage = (key, defaultValue) => {
	const { cart, setCart } = useContext(CartContext);
	const [value, setValue] = useState(() => {
		return getStorageValue(key, defaultValue);
	});

	useEffect(() => {
		// storing input name
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
};
