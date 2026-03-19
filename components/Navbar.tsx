"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "Nosotros" },
  { href: "#menu", label: "Menú" },
  { href: "#experience", label: "Experiencia" },
  { href: "#reservations", label: "Reservas" },
  { href: "#testimonials", label: "Reviews" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  if (!mounted) return null;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: "90px",
          display: "flex",
          alignItems: "center",
          transition: "all 0.5s ease",
          background: isScrolled
            ? "rgba(18, 18, 18, 0.97)"
            : "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 80%, transparent 100%)",
          backdropFilter: isScrolled ? "blur(20px)" : "none",
          borderBottom: isScrolled
            ? "1px solid rgba(201, 169, 110, 0.15)"
            : "none",
        }}
      >
        <nav
          style={{
            width: "100%",
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 32px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
            }}
          >

            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              style={{
                cursor: "pointer",
                height: "90px",
                width: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flexShrink: 0,
                overflow: "hidden",
              }}
            >
              <img
                src="/logo.png"
                alt="Maison Dorée"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                  objectPosition: "center center",
                }}
              />
            </motion.div>

            {/* Centro — Nav Links */}
            <ul
              className="hidden md:flex"
              style={{
                alignItems: "center",
                gap: "40px",
                listStyle: "none",
                margin: "0 auto",
                padding: 0,
              }}
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      fontSize: "11px",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.85)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      position: "relative",
                      textShadow: "0 1px 6px rgba(0,0,0,0.9)",
                      padding: "4px 0",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#C9A96E")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.85)")
                    }
                  >
                    {link.label}
                    {/* Underline animado */}
                    <span
                      style={{
                        position: "absolute",
                        bottom: "-2px",
                        left: 0,
                        width: "0%",
                        height: "1px",
                        background: "#C9A96E",
                        transition: "width 0.3s ease",
                      }}
                      className="nav-underline"
                    />
                  </button>
                </li>
              ))}
            </ul>

            {/* Derecha — CTA */}
            <motion.button
              whileHover={{
                backgroundColor: "#C9A96E",
                color: "#1A1A1A",
                scale: 1.03,
              }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleNavClick("#reservations")}
              className="hidden md:flex"
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "10px 22px",
                border: "1px solid rgba(201, 169, 110, 0.8)",
                color: "#C9A96E",
                background: "transparent",
                cursor: "pointer",
                flexShrink: 0,
                transition: "all 0.3s ease",
                alignItems: "center",
                whiteSpace: "nowrap",
              }}
            >
              Reservar Mesa
            </motion.button>

            {/* Mobile — Hamburguesa */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden"
              style={{
                color: "#C9A96E",
                background: "none",
                border: "1px solid rgba(201,169,110,0.4)",
                cursor: "pointer",
                padding: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>

          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              background: "rgba(14, 14, 14, 0.98)",
              backdropFilter: "blur(24px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            {/* Logo mobile */}
            <motion.img
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              src="/logo.png"
              alt="Maison Dorée"
              style={{
                width: "120px",
                height: "120px",
                objectFit: "contain",
                marginBottom: "16px",
              }}
            />

            {/* Separador */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3 }}
              style={{
                width: "40px",
                height: "1px",
                background: "rgba(201, 169, 110, 0.4)",
                marginBottom: "24px",
              }}
            />

            {/* Links */}
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                onClick={() => handleNavClick(link.href)}
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "2.2rem",
                  fontWeight: 300,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.75)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px 0",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#C9A96E")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.75)")
                }
              >
                {link.label}
              </motion.button>
            ))}

            {/* CTA Mobile */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              onClick={() => handleNavClick("#reservations")}
              style={{
                marginTop: "24px",
                padding: "14px 52px",
                border: "1px solid #C9A96E",
                color: "#C9A96E",
                background: "none",
                cursor: "pointer",
                fontFamily: "var(--font-montserrat)",
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#C9A96E";
                e.currentTarget.style.color = "#1A1A1A";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "none";
                e.currentTarget.style.color = "#C9A96E";
              }}
            >
              Reservar Mesa
            </motion.button>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}