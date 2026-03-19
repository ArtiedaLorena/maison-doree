"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    alt: "Plato gourmet Maison Dorée",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80",
    alt: "Presentación de postre",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&q=80",
    alt: "Cocteles de autor",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80",
    alt: "Ambiente del restaurante",
    className: "col-span-2 row-span-1",
  },
];

const features = [
  {
    title: "Sommelier Experto",
    description: "Maridaje personalizado con más de 300 etiquetas seleccionadas",
  },
  {
    title: "Chef's Table",
    description: "Mesa privada frente a la cocina para 6 comensales",
  },
  {
    title: "Eventos Privados",
    description: "Salón exclusivo para hasta 40 personas",
  },
  {
    title: "Menú Degustación",
    description: "Experiencia de 7 pasos con maridaje opcional",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-24 md:py-32 bg-[#1A1A1A]">
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
            Más que una cena
          </p>
          <h2
            className="text-5xl md:text-6xl font-light text-white"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            La <span className="text-gradient italic">Experiencia</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Gallery Grid */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-3 grid-rows-3 gap-3 h-[500px]"
          >
            {images.map((img, i) => (
              <motion.div
                key={img.alt}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className={`overflow-hidden ${img.className} group`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <p
                className="text-white/60 text-sm leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                En Maison Dorée creemos que una gran cena es mucho más que la
                suma de sus ingredientes. Es la luz perfecta, el servicio que
                anticipa tus necesidades, la música que acompaña sin
                interrumpir.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="w-1 bg-[#C9A96E]/20 group-hover:bg-[#C9A96E] transition-colors duration-300 flex-shrink-0" />
                  <div>
                    <h3
                      className="text-white font-medium mb-1"
                      style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem" }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-white/40 text-sm"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .querySelector("#reservations")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-4 px-10 py-3 bg-[#C9A96E] text-[#1A1A1A] text-xs tracking-widest uppercase hover:bg-[#E8D5B0] transition-all duration-300"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Vivir la Experiencia
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}