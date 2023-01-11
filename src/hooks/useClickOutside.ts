import { RefObject, useEffect, useRef } from 'react';

const useClickOutside = <T extends HTMLElement>(
  func: () => void,
  detectCondition = false,
): RefObject<T> => {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!detectCondition) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) func();
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [detectCondition, func]);

  return ref;
};

export default useClickOutside;
