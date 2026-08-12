"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

const doodles = [
  { src: "/logo.png", x: 3, y: 8, size: 92, drift: -0.030, duration: 14, delay: -3 },
  { src: "/02-jharokha-pair.png", x: 84, y: 6, size: 120, drift: 0.022, duration: 18, delay: -11 },
  { src: "/04-coffee-ritual.png", x: 8, y: 34, size: 105, drift: 0.038, duration: 16, delay: -6 },
  { src: "/07-rose-bloom.png", x: 88, y: 31, size: 86, drift: -0.026, duration: 20, delay: -14 },
  { src: "/05-sun-and-arches.png", x: 2, y: 67, size: 128, drift: -0.018, duration: 19, delay: -8 },
  { src: "/08-menu-and-vase.png", x: 84, y: 66, size: 116, drift: 0.034, duration: 17, delay: -4 },
  { src: "/03-cafe-front.png", x: 22, y: 84, size: 100, drift: 0.024, duration: 21, delay: -16 },
  { src: "/06-evening-lights.png", x: 68, y: 86, size: 112, drift: -0.032, duration: 15, delay: -9 },
  { src: "/07-rose-bloom.png", x: 25, y: 14, size: 68, drift: 0.017, duration: 22, delay: -12 },
  { src: "/04-coffee-ritual.png", x: 72, y: 18, size: 72, drift: -0.021, duration: 17, delay: -7 },
];

type DoodleStyle = CSSProperties & {
  "--x": string;
  "--y": string;
  "--size": string;
  "--drift": number;
  "--scroll-y": string;
  "--scroll-x": string;
  "--scroll-r": string;
  "--duration": string;
  "--delay": string;
};

export function DoodleBackground() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    let frame = 0;
    let targetScroll = window.scrollY;
    let smoothScroll = targetScroll;
    let lastSmoothScroll = smoothScroll;

    const render = () => {
      smoothScroll += (targetScroll - smoothScroll) * 0.085;
      const velocity = smoothScroll - lastSmoothScroll;
      lastSmoothScroll = smoothScroll;
      layer.querySelectorAll<HTMLElement>(".doodle-anchor").forEach((anchor, index) => {
        const drift = Number(anchor.dataset.drift || 0);
        const direction = drift < 0 ? -1 : 1;
        const phase = index * 1.73;
        const scrollY = Math.sin(smoothScroll / 720 + phase) * (12 + Math.abs(drift) * 360) * direction;
        const scrollX = Math.cos(smoothScroll / 960 + phase) * (5 + Math.abs(drift) * 110) * direction;
        const scrollR = Math.sin(smoothScroll / 940 + phase) * 2.2 * direction;
        anchor.style.setProperty("--scroll-y", `${scrollY}px`);
        anchor.style.setProperty("--scroll-x", `${scrollX}px`);
        anchor.style.setProperty("--scroll-r", `${scrollR}deg`);
      });
      if (Math.abs(targetScroll - smoothScroll) > 0.08 || Math.abs(velocity) > 0.01) {
        frame = window.requestAnimationFrame(render);
      } else {
        frame = 0;
      }
    };

    const onScroll = () => {
      targetScroll = window.scrollY;
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    render();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="doodle-field" ref={layerRef} aria-hidden="true">
      {doodles.map((doodle, index) => (
        <span
          className="doodle-anchor"
          key={`${doodle.src}-${index}`}
          data-drift={doodle.drift}
          style={{
            "--x": `${doodle.x}%`,
            "--y": `${doodle.y}%`,
            "--size": `${doodle.size}px`,
            "--drift": doodle.drift,
            "--scroll-y": "0px",
            "--scroll-x": "0px",
            "--scroll-r": "0deg",
            "--duration": `${doodle.duration}s`,
            "--delay": `${doodle.delay}s`,
          } as DoodleStyle}
        >
          <span className="doodle-sprite">
            <img src={doodle.src} alt="" />
          </span>
        </span>
      ))}
    </div>
  );
}
