// Create a new file (e.g., WeatherContext.js) to define the context
import React, { createContext, useContext, useState } from 'react';

// Create the context
const WeatherContext = createContext();

// Create a custom hook to access the context
export function useWeather() {
  return useContext(WeatherContext);
}

// Create a context provider component
export function WeatherProvider({ children }) {
  const [city, setCity] = useState('Tehran'); // Initialize with a default city

  return (
    <WeatherContext.Provider value={{ city, setCity }}>
      {children}
    </WeatherContext.Provider>
  );
}
