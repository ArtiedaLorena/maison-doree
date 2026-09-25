"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2400&q=90";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], ["0%", "28%"]);
  const contentOpacity = useTransform(scrollY, [0, 320], [1, 0]);
  const contentY = useTransform(scrollY, [0, 320], [0, 40]);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative h-[100svh] min-h-[560px] w-full overflow-hidden"
      aria-label="Maison Dorée"
    >
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div className="hero-kenburns absolute inset-0 origin-[center_40%]">
          <Image
            src={HERO_IMAGE}
            alt="Mesa elegida de Maison Dorée con platos de alta cocina"
            fill
            priority
            sizes="100vw"
            quality={75}
            className="object-cover object-[center_40%]"
            style={{
              filter: "brightness(1.02) contrast(1.08) saturate(1.08)",
            }}
          />
        </div>

        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(180deg,
                rgba(10,8,6,0.55) 0%,
                rgba(10,8,6,0.18) 22%,
                rgba(10,8,6,0.12) 48%,
                rgba(14,12,10,0.42) 78%,
                #1A1A1A 100%
              )
            `,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 85% 70% at 50% 42%, transparent 0%, rgba(0,0,0,0.28) 70%, rgba(0,0,0,0.45) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 42% at 50% 46%, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.12) 55%, transparent 78%)",
          }}
        />
        <div
          className="absolute inset-0 mix-blend-soft-light opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 70% 30%, rgba(201,169,110,0.28) 0%, transparent 60%)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center sm:px-8"
      >
        <div
          className="relative flex max-w-4xl flex-col items-center px-6 py-10 sm:px-12 sm:py-14"
          style={{
            borderRadius: "2px",
          }}
        >
          {/* Halo oscuro solo detrás del bloque de marca */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse 70% 65% at 50% 48%, rgba(8,7,6,0.72) 0%, rgba(8,7,6,0.42) 42%, transparent 72%)",
              filter: "blur(2px)",
              transform: "scale(1.15)",
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: "clamp(9px, 2vw, 11px)",
              letterSpacing: "0.42em",
              textTransform: "uppercase",
              color: "#E8D5B0",
              marginBottom: "24px",
              textShadow: "0 2px 16px rgba(0,0,0,0.85)",
            }}
          >
            Recoleta · Buenos Aires
          </motion.p>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 h-px w-12 origin-center"
            style={{
              background: "linear-gradient(90deg, transparent, #C9A96E, transparent)",
            }}
          />

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(3.6rem, 13.5vw, 8.75rem)",
              fontWeight: 400,
              color: "#FFFEFB",
              lineHeight: 0.9,
              letterSpacing: "0.04em",
              marginBottom: "26px",
              textShadow:
                "0 0 1px rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,0.75), 0 8px 28px rgba(0,0,0,0.8), 0 24px 60px rgba(0,0,0,0.55)",
            }}
          >
            <span style={{ display: "block" }}>Maison</span>
            <span
              className="italic"
              style={{
                display: "block",
                color: "#E8D5B0",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textShadow:
                  "0 0 1px rgba(0,0,0,0.95), 0 2px 6px rgba(0,0,0,0.85), 0 10px 32px rgba(0,0,0,0.75), 0 0 40px rgba(201,169,110,0.25)",
              }}
            >
              Dorée
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: "clamp(11px, 2.4vw, 13px)",
              fontWeight: 400,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "rgba(255,254,251,0.92)",
              maxWidth: "28rem",
              lineHeight: 1.7,
              marginBottom: "40px",
              textShadow: "0 2px 12px rgba(0,0,0,0.9), 0 6px 24px rgba(0,0,0,0.6)",
            }}
          >
            Cocina francesa con alma argentina
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
          >
            <motion.button
              type="button"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo("#reservations")}
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "11px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                padding: "15px 36px",
                background: "#C9A96E",
                color: "#1A1A1A",
                border: "1px solid #C9A96E",
                cursor: "pointer",
                fontWeight: 600,
                boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
                transition: "background 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#E8D5B0";
                e.currentTarget.style.boxShadow = "0 12px 36px rgba(201,169,110,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#C9A96E";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.35)";
              }}
            >
              Reservar Mesa
            </motion.button>

            <motion.button
              type="button"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo("#menu")}
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "11px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                padding: "15px 36px",
                background: "rgba(18,16,14,0.35)",
                color: "#FAF7F2",
                border: "1px solid rgba(250,247,242,0.4)",
                cursor: "pointer",
                backdropFilter: "blur(8px)",
                transition: "border-color 0.3s ease, background 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,169,110,0.8)";
                e.currentTarget.style.background = "rgba(18,16,14,0.55)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(250,247,242,0.4)";
                e.currentTarget.style.background = "rgba(18,16,14,0.35)";
              }}
            >
              Ver Menú
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        onClick={() => scrollTo("#about")}
        aria-label="Ver más"
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#C9A96E",
          padding: "8px",
        }}
      >
        <span className="hero-scroll-cue block">
          <ChevronDown size={18} strokeWidth={1.5} />
        </span>
      </motion.button>
    </section>
  );
}
