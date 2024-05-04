import { useCallback, useState } from "react";

function useStorage(key: string, defaultValue: any, storageObject: Storage) {
  const [value, setValue] = useState(() => {
    const storedValue = storageObject.getItem(key);
    try {
      return storedValue ? JSON.parse(storedValue) : defaultValue;
    } catch (error) {
      console.error("Error parsing stored value:", error);
      return defaultValue;
    }
  });

  const setValueInStorage = useCallback((newValue: any) => {
    try {
      if (newValue === undefined) {
        storageObject.removeItem(key);
      } else {
        storageObject.setItem(key, JSON.stringify(newValue));
      }
      setValue(newValue);
    } catch (error) {
      console.error("Error storing value:", error);
    }
  }, [key, storageObject]);

  const removeValueFromStorage = useCallback(() => {
    setValue(undefined);
    console.log("ok");
    storageObject.removeItem(key);
  }, [key, storageObject]);

  return [value, setValueInStorage, removeValueFromStorage] as const;
}

function useLocalStorage(key: string, defaultValue: any) {
  return useStorage(key, defaultValue, window.localStorage);
}

function useSessionStorage(key: string, defaultValue: any) {
  return useStorage(key, defaultValue, window.sessionStorage);
}

export { useSessionStorage, useLocalStorage };
