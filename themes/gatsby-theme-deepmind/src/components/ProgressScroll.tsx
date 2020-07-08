import React, { useEffect, useState, useCallback } from "react";

export type ProgressScrollProps = {};

export default function ProgressScroll(props: ProgressScrollProps) {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const calculateScrollDistance = useCallback(() => {
    const scrollTop = window.pageYOffset; // how much the user has scrolled by
    const winHeight = window.innerHeight;
    const docHeight = getDocHeight();

    const totalDocScrollLength = docHeight - winHeight;
    const scrollPostion = Math.floor((scrollTop / totalDocScrollLength) * 100);

    setScrollPosition(scrollPostion);
  }, []);

  const getDocHeight = useCallback(() => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  }, []);

  const scrollHandler = useCallback(
    () =>
      requestAnimationFrame(() => {
        calculateScrollDistance();
      }),
    []
  );

  useEffect(() => {
    document.addEventListener("scoll", scrollHandler);

    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  return (
    <div className="fixed w-full h-8">
      <div
        className="bg-blue-300"
        style={{ width: `${scrollPosition}%` }}
      ></div>
    </div>
  );
}
