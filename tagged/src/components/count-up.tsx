import { useEffect, useState } from 'react';
import { Text, type TextProps } from 'react-native';

import { formatPrice } from '@/lib/data';

type Props = TextProps & { value: number; duration?: number; delay?: number };

/** Shows a price that quickly counts up from €0 to its real value. */
export function CountUpPrice({ value, duration = 700, delay = 0, ...textProps }: Props) {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    let frame = 0;
    let start: number | null = null;
    const timer = setTimeout(() => {
      const tick = (now: number) => {
        start ??= now;
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // fast at first, then slows down
        setShown(value * eased);
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, delay);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(frame);
    };
  }, [value, duration, delay]);

  return <Text {...textProps}>{formatPrice(shown)}</Text>;
}
