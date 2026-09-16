import { useRef, useEffect } from "react";

export function useAutoscroll(dependencies) {
  const containerRef = useRef();

  useEffect(() => {
    const containerElem = containerRef.current;

    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, dependencies);

  return containerRef;
}