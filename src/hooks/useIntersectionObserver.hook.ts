import { useCallback, useRef, useState } from "react";
import { useIntersectionObserverPropsType } from "../utils/types";

function useIntersectionObserver({
  isLoading,
}: useIntersectionObserverPropsType) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observer = useRef<IntersectionObserver>();

  const callbackFn = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsIntersecting(true);
    } else {
      setIsIntersecting(false);
    }
  };

  const lastElementRef = useCallback((node: HTMLLIElement) => {
    if (!isLoading) {
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver(callbackFn);
      if (node) {
        observer.current.observe(node);
      }
    }
  }, []);

  return { isIntersecting, lastElementRef };
}

export default useIntersectionObserver;
