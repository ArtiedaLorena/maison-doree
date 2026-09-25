"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Clock, Users, Star } from "lucide-react";

const stats = [
  { icon: Award, value: "25+", label: "Años de excelencia" },
  { icon: Users, value: "50K+", label: "Comensales felices" },
  { icon: Star, value: "4.9", label: "Rating promedio" },
  { icon: Clock, value: "12h", label: "Servicio diario" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Imagen con decoración */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&q=80"
                alt="Interior de Maison Dorée - Ambiente elegante"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/40 to-transparent" />
            </div>

            {/* Badge año */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 w-32 h-32 glass-light border border-[#C9A96E]/30 flex flex-col items-center justify-center"
            >
              <span
                className="text-4xl font-bold text-gradient"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                1998
              </span>
              <span
                className="text-[10px] text-[#C9A96E]/70 tracking-widest uppercase mt-1"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Fundado
              </span>
            </motion.div>

            {/* Línea decorativa */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-[#C9A96E]/30" />
          </motion.div>

          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p
              className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Nuestra Historia
            </p>

            <h2
              className="text-5xl md:text-6xl font-light text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Una pasión por la{" "}
              <span className="text-gradient italic">excelencia</span>
            </h2>

            <div
              className="space-y-4 text-white/60 leading-relaxed"
              style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.9rem" }}
            >
              <p>
                Maison Dorée nació en 1998 de la visión del Chef Jean-Pierre
                Moreau y su esposa argentina, Luciana Vidal. Un encuentro entre
                dos culturas culinarias que dio vida a algo único.
              </p>
              <p>
                Cada plato es el resultado de años de técnica francesa aplicada
                a los mejores productos de la tierra argentina. Desde el
                Patagonian lamb hasta el foie gras de Entre Ríos, cada
                ingrediente cuenta una historia.
              </p>
              <p>
                Hoy, con más de 25 años de trayectoria, seguimos siendo fieles
                a nuestra misión: crear experiencias que van más allá de la
                comida.
              </p>
            </div>

            {/* Firma del chef */}
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#C9A96E]/30">
                <img
                  src="https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=100&q=80"
                  alt="Chef Jean-Pierre Moreau"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p
                  className="text-white font-medium text-sm"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Jean-Pierre Moreau
                </p>
                <p
                  className="text-[#C9A96E]/70 text-xs tracking-wider"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Chef & Co-fundador
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 border border-[#C9A96E]/30 flex items-center justify-center flex-shrink-0">
                    <stat.icon size={16} className="text-[#C9A96E]" />
                  </div>
                  <div>
                    <p
                      className="text-2xl font-light text-gradient"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="text-white/40 text-[11px] tracking-wider"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}