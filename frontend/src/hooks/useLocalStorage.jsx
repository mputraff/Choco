import { useState } from "react";

export const useLocalStorage = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // mendapatkan item dengan value 'keyName' di local storage
      const value = window.localStorage.getItem(keyName);
      if (value) {
        // jika value ditemukan, mengembalikan nilai value yang sudah diubah
        // dari JSON ke objek javascript
        return JSON.parse(value);
      } else {
        // jika value tidak ditemukan, menyimpan defaultValue kedalam local storage
        // dan mengembalikannya
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));

        return defaultValue;
      }
    } catch (e) {
      return defaultValue;
    }
  });

  const setValue = (newValue) => {
    try {
      // menyimpan new value dalam bentuk json kedalam localstorage
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {
      console.log(err);
    }

    setStoredValue(newValue);
  };

  return [storedValue, setValue];
};
