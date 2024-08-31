import { useState } from "react";

export const useLocalStorage= (keyName: string, defaultValue: any) => {
    const [storadeValue, setStoradeValue] = useState(() => {
        try {
            const storadeValue = localStorage.getItem(keyName);
            if (value) {
                return JSON.parse(value);
            } else {
                window.localStorage.setItem(keyName,
                    JSON.stringify(defaultValue)
                )
                return defaultValue;
            }
        } catch (e) {
            return defaultValue;
        }
    })

    const setValue = (newValue) => {
        try {
            window.localStorage.setItem(keyName, JSON.stringify(newValue));
        } catch (error) {
            console.log(error)
        }
        setStoradeValue(newValue);
    }

    return [storadeValue, setValue];
}