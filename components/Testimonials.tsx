"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-24 md:py-32 bg-[#1A1A1A] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p
            className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Lo que dicen
          </p>
          <h2
            className="text-5xl md:text-6xl font-light text-white"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Nuestros <span className="text-gradient italic">Huéspedes</span>
          </h2>
          <div className="w-16 h-px bg-[#C9A96E] mx-auto mt-6" />
        </motion.div>

        {/* Slider Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Quote Icon */}
          <div className="flex justify-center mb-8">
            <Quote size={40} className="text-[#C9A96E]/20" />
          </div>

          {/* Slide */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-center px-4 sm:px-8"
            >
              {/* Comentario */}
              <p
                className="text-white/70 text-xl md:text-2xl font-light leading-relaxed mb-10 italic"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                &ldquo;{TESTIMONIALS[current].comment}&rdquo;
              </p>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-8">
                {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-[#C9A96E] fill-[#C9A96E]"
                  />
                ))}
              </div>

              {/* Divider */}
              <div className="w-8 h-px bg-[#C9A96E]/30 mx-auto mb-8" />

              {/* Avatar + Info */}
              <div className="flex flex-col items-center gap-3">
                <div
                  className="w-14 h-14 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/30 flex items-center justify-center text-[#C9A96E] text-lg font-medium"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {TESTIMONIALS[current].avatar}
                </div>
                <div className="text-center">
                  <p
                    className="text-white text-sm font-medium"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {TESTIMONIALS[current].name}
                  </p>
                  <p
                    className="text-[#C9A96E]/50 text-xs tracking-widest uppercase mt-1"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {TESTIMONIALS[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              aria-label="Testimonio anterior"
              className="w-10 h-10 border border-white/10 hover:border-[#C9A96E]/50 flex items-center justify-center text-white/40 hover:text-[#C9A96E] transition-all duration-300"
            >
              <ChevronLeft size={16} />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Ir al testimonio ${i + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? "w-6 h-1.5 bg-[#C9A96E]"
                      : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              aria-label="Siguiente testimonio"
              className="w-10 h-10 border border-white/10 hover:border-[#C9A96E]/50 flex items-center justify-center text-white/40 hover:text-[#C9A96E] transition-all duration-300"
            >
              <ChevronRight size={16} />
            </motion.button>
          </div>
        </motion.div>

        {/* Cards de fondo decorativas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-20"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.button
              type="button"
              key={t.name}
              whileHover={{ borderColor: "rgba(201, 169, 110, 0.3)", y: -4 }}
              onClick={() => setCurrent(i)}
              aria-pressed={i === current}
              aria-label={`Ver testimonio de ${t.name}`}
              className={`p-6 border cursor-pointer transition-all duration-300 text-left w-full ${
                i === current
                  ? "border-[#C9A96E]/30 bg-[#C9A96E]/5"
                  : "border-white/5 hover:bg-white/5"
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={10}
                    className="text-[#C9A96E] fill-[#C9A96E]"
                  />
                ))}
              </div>

              <p
                className="text-white/40 text-sm leading-relaxed line-clamp-3 mb-4 italic"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "1rem" }}
              >
                &ldquo;{t.comment}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/20 flex items-center justify-center text-[#C9A96E] text-xs"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p
                    className="text-white/60 text-xs"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-white/20 text-[10px] tracking-wider uppercase"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

      </div>
    </section>
  );
}