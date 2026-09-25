"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], ["0%", "40%"]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background con parallax */}
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80')`,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.6) 70%, rgba(26,26,26,1) 100%)",
          }}
        />
      </motion.div>

      {/* Contenido */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
      >

        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(3rem, 14vw, 10rem)",
            fontWeight: 300,
            color: "white",
            lineHeight: 0.95,
            marginBottom: "24px",
            textShadow: "0 4px 24px rgba(0,0,0,0.6)",
            maxWidth: "100%",
            padding: "0 8px",
          }}
        >
          Maison
          <br />
          <span className="text-gradient italic">Dorée</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: "clamp(10px, 2.5vw, 12px)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.9)",
            textShadow: "0 2px 12px rgba(0,0,0,0.8)",
            maxWidth: "90vw",
            padding: "0 16px",
          }}
        >
          Cocina francesa con alma argentina
        </motion.p>

        {/* Línea decorativa inferior */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          style={{
            width: "48px",
            height: "1px",
            background: "#C9A96E",
            margin: "28px 0",
          }}
        />

        {/* Solo botón Ver Menú */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .querySelector("#menu")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            style={{
              padding: "12px clamp(20px, 6vw, 48px)",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "rgba(255,255,255,0.85)",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
              fontFamily: "var(--font-montserrat)",
              whiteSpace: "nowrap",
              transition: "color 0.3s ease, border-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.85)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
            }}
          >
            Ver Menú
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Solo flecha sin texto */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} color="#C9A96E" />
        </motion.div>
      </motion.div>
    </section>
  );
}