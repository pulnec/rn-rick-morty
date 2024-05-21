import {useEffect, useState} from 'react';

function useDebounce(valueFunction: any, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(valueFunction);
  useEffect(() => {
    const handler = setTimeout(() => {
      if (typeof valueFunction === 'function') {
        setDebouncedValue(() => valueFunction());
      } else {
        setDebouncedValue(valueFunction);
      }
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [valueFunction, delay]);

  return debouncedValue;
}

export default useDebounce;
