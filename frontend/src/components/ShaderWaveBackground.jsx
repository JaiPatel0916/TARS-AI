import { useEffect, useRef } from "react";

export default function ShaderWaveBackground({ theme = "dark" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // 🔥 MORE + BIGGER WAVES
    const waves = [
      { amp: 120, freq: 0.006, speed: 0.015, offset: 0 },
      { amp: 160, freq: 0.005, speed: 0.012, offset: 120 },
      { amp: 100, freq: 0.008, speed: 0.02, offset: 240 },
      { amp: 140, freq: 0.0065, speed: 0.017, offset: 360 },
      { amp: 90, freq: 0.009, speed: 0.025, offset: 480 },
    ];

    const render = () => {
      time += 1;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      /* ---------- BACKGROUND ---------- */
      const bg = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

      if (theme === "dark") {
        bg.addColorStop(0, "#0a0014");
        bg.addColorStop(1, "#14001f");
      } else {
        bg.addColorStop(0, "#f7f8ff");
        bg.addColorStop(1, "#eef1ff");
      }

      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      /* ---------- WAVES ---------- */
      waves.forEach((wave, i) => {
        ctx.beginPath();

        for (let x = 0; x < canvas.width; x += 5) {
          const y =
            canvas.height / 2 -
            canvas.height * 0.08 + // 👈 section ko thoda upar feel
            Math.sin(x * wave.freq + time * wave.speed + wave.offset) *
              wave.amp;

          ctx.lineTo(x, y);
        }

        // 🎨 STRONGER COLORS (WHITE MODE FIX)
        ctx.strokeStyle =
          theme === "dark"
            ? `rgba(170, 120, 255, ${0.18 + i * 0.08})`
            : `rgba(130, 110, 255, ${0.35 + i * 0.08})`;

        ctx.lineWidth = 2.8; // 👈 thicker waves
        ctx.shadowBlur = theme === "dark" ? 28 : 20;
        ctx.shadowColor =
          theme === "dark"
            ? "rgba(180,120,255,0.9)"
            : "rgba(120,120,255,0.6)";

        ctx.stroke();
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}
