import { useEffect, useState } from "react";

export default function useCountUp(target, duration = 800) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.round(progress * target);

      setValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }, [target, duration]);

  return value;
}
