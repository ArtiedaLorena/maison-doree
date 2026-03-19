"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, MessageSquare, CheckCircle } from "lucide-react";
import { RESTAURANT_INFO } from "@/lib/constants";

const timeSlots = [
  "12:00", "12:30", "13:00", "13:30", "14:00",
  "20:00", "20:30", "21:00", "21:30", "22:00", "22:30",
];

const guestOptions = [
  "1 persona", "2 personas", "3 personas",
  "4 personas", "5 personas", "6+ personas",
];

export default function Reservations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    date: "", time: "", guests: "", message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.15)",
    padding: "12px 16px",
    color: "white",
    fontSize: "14px",
    outline: "none",
    fontFamily: "var(--font-montserrat)",
    transition: "border-color 0.3s",
  };

  const labelStyle = {
    display: "block",
    color: "rgba(255,255,255,0.6)",
    fontSize: "11px",
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    marginBottom: "8px",
    fontFamily: "var(--font-montserrat)",
  };

  return (
    <section
      id="reservations"
      ref={ref}
      style={{ background: "#1E1E1E", position: "relative", padding: "96px 0" }}
    >
      {/* Overlay oscuro sólido — sin imagen de fondo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, #1A1A1A 0%, #242424 50%, #1A1A1A 100%)",
        }}
      />

      <div
        style={{ position: "relative", zIndex: 10, maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p
              style={{
                color: "#C9A96E",
                fontSize: "11px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                marginBottom: "16px",
                fontFamily: "var(--font-montserrat)",
              }}
            >
              Reservas
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 300,
                color: "white",
                marginBottom: "24px",
                lineHeight: 1.1,
              }}
            >
              Reservá tu{" "}
              <span className="text-gradient italic">mesa</span>
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "14px",
                lineHeight: 1.8,
                marginBottom: "40px",
                fontFamily: "var(--font-montserrat)",
              }}
            >
              Te recomendamos reservar con al menos 48hs de anticipación.
              Para grupos de más de 6 personas, contactanos directamente.
            </p>

            {/* Info contacto */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {[
                { icon: Clock, label: "Horarios", value: RESTAURANT_INFO.hours.weekdays },
                { icon: Clock, label: "Fines de semana", value: RESTAURANT_INFO.hours.weekends },
                { icon: MessageSquare, label: "Teléfono", value: RESTAURANT_INFO.phone },
                { icon: MessageSquare, label: "Email", value: RESTAURANT_INFO.email },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      border: "1px solid rgba(201,169,110,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <item.icon size={14} color="#C9A96E" />
                  </div>
                  <div>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.4)",
                        fontSize: "11px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        marginBottom: "4px",
                        fontFamily: "var(--font-montserrat)",
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.85)",
                        fontSize: "14px",
                        fontFamily: "var(--font-montserrat)",
                      }}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "64px 0",
                  textAlign: "center",
                }}
              >
                <CheckCircle size={48} color="#C9A96E" style={{ marginBottom: "16px" }} />
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "2rem",
                    fontWeight: 300,
                    color: "white",
                    marginBottom: "8px",
                  }}
                >
                  ¡Reserva recibida!
                </h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", fontFamily: "var(--font-montserrat)" }}>
                  Te contactaremos en las próximas 2 horas para confirmar.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle}>Nombre completo *</label>
                    <input
                      type="text"
                      required
                      placeholder="Juan García"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="juan@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle}>Teléfono</label>
                    <input
                      type="tel"
                      placeholder="+54 11 ..."
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Personas *</label>
                    <select
                      required
                      value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: e.target.value })}
                      style={{ ...inputStyle, cursor: "pointer" }}
                    >
                      <option value="" disabled style={{ background: "#1E1E1E" }}>Seleccioná</option>
                      {guestOptions.map((g) => (
                        <option key={g} value={g} style={{ background: "#1E1E1E" }}>{g}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle}>Fecha *</label>
                    <input
                      type="date"
                      required
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      min={new Date().toISOString().split("T")[0]}
                      style={{ ...inputStyle, colorScheme: "dark" }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Horario *</label>
                    <select
                      required
                      value={form.time}
                      onChange={(e) => setForm({ ...form, time: e.target.value })}
                      style={{ ...inputStyle, cursor: "pointer" }}
                    >
                      <option value="" disabled style={{ background: "#1E1E1E" }}>Seleccioná</option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t} style={{ background: "#1E1E1E" }}>{t}hs</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Nota especial</label>
                  <textarea
                    rows={3}
                    placeholder="Alergias, celebraciones, pedidos especiales..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: "none" }}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: "100%",
                    padding: "16px",
                    background: "#C9A96E",
                    color: "#1A1A1A",
                    fontSize: "12px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    border: "none",
                    cursor: loading ? "not-allowed" : "pointer",
                    opacity: loading ? 0.7 : 1,
                    fontFamily: "var(--font-montserrat)",
                    transition: "background 0.3s",
                  }}
                >
                  {loading ? "Enviando..." : "Confirmar Reserva"}
                </motion.button>

              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}