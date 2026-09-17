import { useMemo } from 'react';
import { useReducedMotion } from 'motion/react';
import { JOB_TITLES } from '../data/jobs';

interface ScrollingTitlesProps {
  highlightedJob?: string | null;
  paused?: boolean;
  dimmed?: boolean;
}

export function ScrollingTitles({ highlightedJob, paused = false, dimmed = false }: ScrollingTitlesProps) {
  const reducedMotion = useReducedMotion();
  const rows = useMemo(() => {
    const shuffled = [...JOB_TITLES].sort();
    const rowCount = 12;
    const perRow = Math.ceil(shuffled.length / rowCount);
    return Array.from({ length: rowCount }, (_, i) => {
      const start = (i * perRow) % shuffled.length;
      const titles: { text: string; size: number }[] = [];
      for (let j = 0; j < perRow + 5; j++) {
        titles.push({
          text: shuffled[(start + j) % shuffled.length],
          size: 0.85 + ((start + j) % 7) * 0.06,
        });
      }
      return {
        titles: [...titles, ...titles], // doubled for seamless loop
        direction: (i % 2 === 0 ? 'left' : 'right') as 'left' | 'right',
        duration: 20 + (i % 4) * 8,
      };
    });
  }, []);

  const shouldPause = paused || Boolean(reducedMotion);

  return (
    <>
      <style>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 overflow-hidden transition-opacity duration-700 ${dimmed ? 'opacity-[0.06]' : 'opacity-[0.12]'}`}
      >
        <div className="flex flex-col justify-around h-full py-4">
          {rows.map((row, i) => (
            <div key={i} className="relative overflow-hidden whitespace-nowrap">
              <div
                className="inline-flex gap-8"
                style={{
                  animation: shouldPause
                    ? 'none'
                    : `${row.direction === 'left' ? 'scroll-left' : 'scroll-right'} ${row.duration}s linear infinite`,
                  willChange: 'transform',
                }}
              >
                {row.titles.map((item, j) => {
                  const isHighlighted =
                    highlightedJob && item.text.toLowerCase() === highlightedJob.toLowerCase();
                  return (
                    <span
                      key={`${item.text}-${j}`}
                      className={`font-display inline-block select-none whitespace-nowrap px-4 py-1 transition-[color,background-color,border-color,opacity,transform,box-shadow] duration-500 ${
                        isHighlighted
                          ? 'scale-110 rounded bg-[var(--accent-soft)] px-3 py-0.5 text-[var(--ink)] opacity-100'
                          : 'text-[var(--ink)] opacity-80'
                      }`}
                      style={{ fontSize: `${item.size}rem` }}
                    >
                      {item.text}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
