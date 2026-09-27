import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);

      return storedValue
        ? JSON.parse(storedValue)
        : initialValue;
    } catch (error) {
      console.error("LocalStorage error:", error);
      return initialValue;
    }
  });

  const updateValue = (newValue) => {
    try {
      const valueToStore =
        typeof newValue === "function"
          ? newValue(value)
          : newValue;

      setValue(valueToStore);

      localStorage.setItem(
        key,
        JSON.stringify(valueToStore)
      );
    } catch (error) {
      console.error("Unable to save to localStorage:", error);
    }
  };

  return [value, updateValue];
}

export default useLocalStorage;