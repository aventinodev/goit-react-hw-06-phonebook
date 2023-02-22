import { useState, useEffect } from 'react';

export const useLocalStorage = (key, dafaultValue) => {
  const [state, seState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? dafaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, seState];
};
