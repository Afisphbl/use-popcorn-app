import { useEffect, useState } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set a timer to update the debounced value after the delay
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function to clear the previous timer on each keystroke
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]); // Reruns effect if value or delay changes

  return debouncedValue;
}

export default useDebounce;
