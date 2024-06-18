import { useRef, useState, useEffect } from 'react';

export const Loader = () => {
  const loaderContainer = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      loaderContainer.current.classList.add('Loaded');
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="Loader" ref={loaderContainer}>
      {isLoading && <div className="Loading"></div>}
    </div>
  );
};
