"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, ExternalLink, MapPin, Phone, Mail } from "lucide-react";
import { RESTAURANT_INFO } from "@/lib/constants";

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(RESTAURANT_INFO.address)}`;

export default function Footer() {
  return (
    <footer
      style={{
        background: "#111111",
        borderTop: "1px solid rgba(201, 169, 110, 0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "48px 32px",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-12">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div
              style={{
                height: "90px",
                width: "150px",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
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
            </div>

            <p
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "12px",
                color: "rgba(255,255,255,0.35)",
                lineHeight: 1.8,
                maxWidth: "260px",
              }}
            >
              {RESTAURANT_INFO.description}
            </p>

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "8px",
              }}
            >
              {[
                { icon: Instagram, href: RESTAURANT_INFO.social.instagram, label: "Instagram" },
                { icon: Facebook, href: RESTAURANT_INFO.social.facebook, label: "Facebook" },
                { icon: ExternalLink, href: RESTAURANT_INFO.social.tripadvisor, label: "TripAdvisor" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    width: "34px",
                    height: "34px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.25)",
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(201,169,110,0.5)";
                    e.currentTarget.style.color = "#C9A96E";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.25)";
                  }}
                >
                  <social.icon size={13} />
                </motion.a>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <p
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "10px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#C9A96E",
                marginBottom: "4px",
              }}
            >
              Horarios
            </p>

            <div
              style={{
                width: "24px",
                height: "1px",
                background: "rgba(201,169,110,0.3)",
                marginTop: "-12px",
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: "4px",
                  }}
                >
                  Lun — Vie
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.3)",
                    lineHeight: 1.6,
                  }}
                >
                  12:00 — 15:00
                  <br />
                  20:00 — 23:30
                </p>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "1px",
                  background: "rgba(255,255,255,0.05)",
                }}
              />

              <div>
                <p
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: "4px",
                  }}
                >
                  Sáb — Dom
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.3)",
                    lineHeight: 1.6,
                  }}
                >
                  12:00 — 16:00
                  <br />
                  20:00 — 00:00
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <p
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "10px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#C9A96E",
                marginBottom: "4px",
              }}
            >
              Contacto
            </p>

            <div
              style={{
                width: "24px",
                height: "1px",
                background: "rgba(201,169,110,0.3)",
                marginTop: "-12px",
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                {
                  icon: MapPin,
                  value: RESTAURANT_INFO.address,
                  href: mapsUrl,
                },
                {
                  icon: Phone,
                  value: RESTAURANT_INFO.phone,
                  href: `tel:${RESTAURANT_INFO.phone.replace(/\s/g, "")}`,
                },
                {
                  icon: Mail,
                  value: RESTAURANT_INFO.email,
                  href: `mailto:${RESTAURANT_INFO.email}`,
                },
              ].map((item) => (
                <a
                  key={item.value}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    textDecoration: "none",
                  }}
                >
                  <item.icon
                    size={13}
                    style={{
                      color: "rgba(201,169,110,0.5)",
                      marginTop: "2px",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.4)",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.value}
                  </span>
                </a>
              ))}
            </div>

            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                document
                  .querySelector("#reservations")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                marginTop: "8px",
                padding: "10px 0",
                border: "1px solid rgba(201,169,110,0.4)",
                color: "#C9A96E",
                background: "none",
                cursor: "pointer",
                fontFamily: "var(--font-montserrat)",
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                transition: "all 0.3s",
                width: "100%",
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
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.04)",
          padding: "16px 32px",
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: "10px",
            color: "rgba(255,255,255,0.15)",
            letterSpacing: "0.05em",
          }}
        >
          © {new Date().getFullYear()} {RESTAURANT_INFO.name}. Todos los derechos reservados.
        </p>
        <p
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: "10px",
            color: "rgba(255,255,255,0.15)",
            letterSpacing: "0.05em",
          }}
        >
          Diseñado con ♥ en Buenos Aires
        </p>
      </div>
    </footer>
  );
}
