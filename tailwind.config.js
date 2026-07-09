/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        md: "2rem",
        lg: "3rem",
      },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0a0a0a",
          50: "#1a1a1a",
          100: "#141414",
          200: "#0f0f0f",
          300: "#080808",
        },
        bone: {
          DEFAULT: "#f4f1ea",
          dim: "#a8a39a",
          mute: "#6b6760",
        },
        neon: {
          magenta: "#ff3ea5",
          violet: "#9b5cff",
          cyan: "#5cf2ff",
          lime: "#c8ff3e",
        },
      },
      fontFamily: {
        display: [
          '"Anton"',
          '"ZCOOL XiaoWei"',
          "Impact",
          "Haettenschweiler",
          '"PingFang SC"',
          '"Microsoft YaHei"',
          "sans-serif",
        ],
        sans: [
          '"Inter"',
          '"Noto Sans SC"',
          "ui-sans-serif",
          "system-ui",
          '"PingFang SC"',
          '"Microsoft YaHei"',
          "sans-serif",
        ],
        mono: [
          '"JetBrains Mono"',
          '"Noto Sans SC"',
          "ui-monospace",
          "monospace",
        ],
        serif: [
          '"Instrument Serif"',
          '"Long Cang"',
          '"Noto Serif SC"',
          "ui-serif",
          "Georgia",
          '"Songti SC"',
          "serif",
        ],
      },
      letterSpacing: {
        "ultra": "-0.04em",
        "mega": "-0.06em",
      },
      animation: {
        "spin-slow": "spin 18s linear infinite",
        "spin-reverse": "spin-reverse 14s linear infinite",
        "spin-reverse-slow": "spin-reverse 24s linear infinite",
        "marquee": "marquee 40s linear infinite",
        "marquee-fast": "marquee 18s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "rise": "rise 1.2s cubic-bezier(.2,.7,.2,1) both",
        "fade-up": "fadeUp 1s cubic-bezier(.2,.7,.2,1) both",
        "blink": "blink 1.2s steps(1) infinite",
        "glitch": "glitch 4s steps(1) infinite",
        "scanline": "scanline 6s linear infinite",
        "orbit": "orbit 22s linear infinite",
        "blink-soft": "blinkSoft 3s ease-in-out infinite",
        "grain": "grain 8s steps(8) infinite",
      },
      keyframes: {
        "spin-reverse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        rise: {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        blinkSoft: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "1" },
        },
        glitch: {
          "0%, 92%, 100%": { transform: "translate(0,0)" },
          "93%": { transform: "translate(-2px, 1px)" },
          "95%": { transform: "translate(2px, -1px)" },
          "97%": { transform: "translate(-1px, 2px)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(160px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(160px) rotate(-360deg)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-2%, -3%)" },
          "30%": { transform: "translate(3%, 2%)" },
          "50%": { transform: "translate(-1%, 3%)" },
          "70%": { transform: "translate(2%, -1%)" },
          "90%": { transform: "translate(-3%, 1%)" },
        },
      },
      backgroundImage: {
        "grid": "linear-gradient(to right, rgba(244,241,234,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(244,241,234,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "56px 56px",
      },
    },
  },
  plugins: [],
};
