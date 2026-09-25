"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MENU_CATEGORIES } from "@/lib/constants";

const tagColors: Record<string, string> = {
  "Chef's Choice": "bg-[#C9A96E]/20 text-[#C9A96E] border-[#C9A96E]/30",
  Signature: "bg-white/10 text-white border-white/20",
  Nuevo: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  Veggie: "bg-green-500/20 text-green-400 border-green-500/30",
};

export default function Menu() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("entradas");

  const currentCategory = MENU_CATEGORIES.find(
    (c) => c.id === activeCategory
  );

  return (
    <section id="menu" ref={ref} className="py-24 md:py-32 bg-[#2A2A2A]">
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
            Nuestra Propuesta
          </p>
          <h2
            className="text-5xl md:text-6xl font-light text-white mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            El <span className="text-gradient italic">Menú</span>
          </h2>
          <div className="w-16 h-px bg-[#C9A96E] mx-auto" />
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-2 sm:gap-4 mb-12 flex-wrap"
          role="tablist"
          aria-label="Categorías del menú"
        >
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.id}
              aria-controls={`menu-panel-${cat.id}`}
              id={`menu-tab-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 text-xs tracking-widest uppercase transition-all duration-300 border ${
                activeCategory === cat.id
                  ? "bg-[#C9A96E] text-[#1A1A1A] border-[#C9A96E]"
                  : "text-white/50 border-white/10 hover:border-[#C9A96E]/50 hover:text-white/80"
              }`}
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            id={`menu-panel-${activeCategory}`}
            role="tabpanel"
            aria-labelledby={`menu-tab-${activeCategory}`}
            className="grid sm:grid-cols-2 gap-4 md:gap-6"
          >
            {currentCategory?.items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group p-6 border border-white/5 hover:border-[#C9A96E]/30 bg-[#1A1A1A]/50 hover:bg-[#1A1A1A]/80 transition-all duration-300"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <h3
                        className="text-xl font-medium text-white group-hover:text-[#C9A96E] transition-colors"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                      >
                        {item.name}
                      </h3>
                      {item.tag && (
                        <span
                          className={`text-[10px] px-2 py-0.5 border tracking-wider uppercase ${tagColors[item.tag]}`}
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p
                      className="text-white/40 text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                  <span
                    className="text-[#C9A96E] text-xl font-light whitespace-nowrap"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {item.price}
                  </span>
                </div>

                {/* Línea animada */}
                <div className="mt-4 h-px bg-white/5 overflow-hidden">
                  <motion.div
                    className="h-full bg-[#C9A96E]/30"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    style={{ transformOrigin: "left" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p
            className="text-white/30 text-xs tracking-widest uppercase mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Menú completo disponible en el restaurante
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .querySelector("#reservations")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-10 py-3 border border-[#C9A96E] text-[#C9A96E] text-xs tracking-widest uppercase hover:bg-[#C9A96E] hover:text-[#1A1A1A] transition-all duration-300"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Hacer una Reserva
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}