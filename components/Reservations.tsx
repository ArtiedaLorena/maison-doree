"use client";

import { useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Phone, Mail, CheckCircle } from "lucide-react";
import { RESTAURANT_INFO } from "@/lib/constants";
import { submitReservation } from "@/app/actions/reservations";

const weekdaySlots = [
  "12:00", "12:30", "13:00", "13:30", "14:00",
  "20:00", "20:30", "21:00", "21:30", "22:00", "22:30",
];

const weekendSlots = [
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00",
];

const guestOptions = [
  "1 persona", "2 personas", "3 personas",
  "4 personas", "5 personas", "6+ personas",
];

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "",
  message: "",
};

function getLocalMinDate() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function getTimeSlotsForDate(dateStr: string) {
  if (!dateStr) return weekdaySlots;
  const date = new Date(`${dateStr}T12:00:00`);
  const day = date.getDay();
  const isWeekend = day === 0 || day === 6;
  return isWeekend ? weekendSlots : weekdaySlots;
}

export default function Reservations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const minDate = useMemo(() => getLocalMinDate(), []);
  const timeSlots = useMemo(() => getTimeSlotsForDate(form.date), [form.date]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const result = await submitReservation(form);
      if (!result.ok) {
        setError(result.error);
        return;
      }

      window.open(result.whatsappUrl, "_blank", "noopener,noreferrer");
      setSubmitted(true);
    } catch {
      setError("No pudimos enviar la reserva. Intentá de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setForm(emptyForm);
    setSubmitted(false);
    setError(null);
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
      style={{ background: "#1E1E1E", position: "relative", padding: "clamp(64px, 10vw, 96px) 0" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, #1A1A1A 0%, #242424 50%, #1A1A1A 100%)",
        }}
      />

      <div
        style={{ position: "relative", zIndex: 10, maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 24px)" }}
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
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
              Al confirmar, abrimos WhatsApp con tu pedido listo para enviar.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {[
                { icon: Clock, label: "Horarios", value: RESTAURANT_INFO.hours.weekdays },
                { icon: Clock, label: "Fines de semana", value: RESTAURANT_INFO.hours.weekends },
                { icon: Phone, label: "Teléfono", value: RESTAURANT_INFO.phone, href: `tel:${RESTAURANT_INFO.phone.replace(/\s/g, "")}` },
                { icon: Mail, label: "Email", value: RESTAURANT_INFO.email, href: `mailto:${RESTAURANT_INFO.email}` },
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
                    {"href" in item && item.href ? (
                      <a
                        href={item.href}
                        style={{
                          color: "rgba(255,255,255,0.85)",
                          fontSize: "14px",
                          fontFamily: "var(--font-montserrat)",
                          textDecoration: "none",
                        }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        style={{
                          color: "rgba(255,255,255,0.85)",
                          fontSize: "14px",
                          fontFamily: "var(--font-montserrat)",
                        }}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

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
                  ¡Listo para confirmar!
                </h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", fontFamily: "var(--font-montserrat)", marginBottom: "24px", maxWidth: "320px" }}>
                  Abrimos WhatsApp con tu reserva. Enviá el mensaje para que podamos confirmarla.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  style={{
                    padding: "12px 28px",
                    border: "1px solid rgba(201,169,110,0.5)",
                    color: "#C9A96E",
                    background: "transparent",
                    cursor: "pointer",
                    fontFamily: "var(--font-montserrat)",
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  Nueva reserva
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }} noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="reservation-name" style={labelStyle}>Nombre completo *</label>
                    <input
                      id="reservation-name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Juan García"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="reservation-email" style={labelStyle}>Email *</label>
                    <input
                      id="reservation-email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="juan@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="reservation-phone" style={labelStyle}>Teléfono *</label>
                    <input
                      id="reservation-phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="+54 11 ..."
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="reservation-guests" style={labelStyle}>Personas *</label>
                    <select
                      id="reservation-guests"
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
                    <label htmlFor="reservation-date" style={labelStyle}>Fecha *</label>
                    <input
                      id="reservation-date"
                      type="date"
                      required
                      value={form.date}
                      onChange={(e) => {
                        const nextDate = e.target.value;
                        const slots = getTimeSlotsForDate(nextDate);
                        setForm({
                          ...form,
                          date: nextDate,
                          time: slots.includes(form.time) ? form.time : "",
                        });
                      }}
                      min={minDate}
                      style={{ ...inputStyle, colorScheme: "dark" }}
                    />
                  </div>
                  <div>
                    <label htmlFor="reservation-time" style={labelStyle}>Horario *</label>
                    <select
                      id="reservation-time"
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
                  <label htmlFor="reservation-message" style={labelStyle}>Nota especial</label>
                  <textarea
                    id="reservation-message"
                    rows={3}
                    placeholder="Alergias, celebraciones, pedidos especiales..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: "none" }}
                  />
                </div>

                {error && (
                  <p
                    role="alert"
                    style={{
                      color: "#f87171",
                      fontSize: "13px",
                      fontFamily: "var(--font-montserrat)",
                    }}
                  >
                    {error}
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
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
                  {loading ? "Preparando..." : "Reservar por WhatsApp"}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
