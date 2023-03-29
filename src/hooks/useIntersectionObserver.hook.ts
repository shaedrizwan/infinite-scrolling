import React, { useEffect, useState } from "react";

function useIntersectionObserver({ parentRef, targetRef }: any) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const options = {
    root: parentRef.current,
    rootMargin: "0px",
    threshold: 1,
  };

  const callbackFn = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsIntersecting(true);
    } else {
      setIsIntersecting(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFn, options);
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
        targetRef = null;
      }
    };
  }, [targetRef, options]);

  return { isIntersecting };
}

export default useIntersectionObserver;
