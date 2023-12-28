import { createContext, useState } from 'react';

export const Context = createContext();
export const CustomProvider = ({ children }) => {


	const useLocalStorage = (key, initialValue) => {
		const [storedValue, setStoredValue] = useState(() => {
			try {
				const item = window.localStorage.getItem(key);
				return item ? JSON.parse(item) : initialValue;
			} catch (err) {
				return initialValue;
			}
		});

		const setValue = value => {
			try {
				setStoredValue(value);
				window.localStorage.setItem(key, JSON.stringify(value));
			} catch (err) {
				console.log('Catch error:', err);
			}
		};

		return [storedValue, setValue];
	}

	const useSessionStorage = (key, initialValue) => {
		const [sessionValue, setSessionValue] = useState(() => {
			try {
				const item = window.sessionStorage.getItem(key);
				return item ? JSON.parse(item) : initialValue;
			} catch (err) {
				return initialValue;
			}
		});

		const setSValue = value => {
			try {
				setSessionValue(value);
				window.sessionStorage.setItem(key, JSON.stringify(value));
			} catch (err) {
				console.log('Catch error:', err);
			}
		};

		return [sessionValue, setSValue];
	}
	
	const [contactStatus, setContactStatus] = useLocalStorage('contact', false);

	return (
		<Context.Provider
			value={{ useLocalStorage, useSessionStorage, contactStatus, setContactStatus }}
		>
			{children}
		</Context.Provider>
	);
}
