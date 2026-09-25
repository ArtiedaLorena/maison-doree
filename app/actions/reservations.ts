"use server";

import { RESTAURANT_INFO } from "@/lib/constants";

export type ReservationPayload = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  message: string;
};

export type ReservationResult =
  | { ok: true; whatsappUrl: string }
  | { ok: false; error: string };

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidDate(date: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
  const parsed = new Date(`${date}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const selected = new Date(`${date}T00:00:00`);
  return selected >= today;
}

export async function submitReservation(
  payload: ReservationPayload
): Promise<ReservationResult> {
  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const phone = payload.phone?.trim() ?? "";
  const date = payload.date?.trim() ?? "";
  const time = payload.time?.trim() ?? "";
  const guests = payload.guests?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!name || !email || !phone || !date || !time || !guests) {
    return { ok: false, error: "Completá todos los campos obligatorios." };
  }

  if (!isValidEmail(email)) {
    return { ok: false, error: "Ingresá un email válido." };
  }

  if (!isValidDate(date)) {
    return { ok: false, error: "Seleccioná una fecha válida a partir de hoy." };
  }

  const restaurantPhone = RESTAURANT_INFO.phone.replace(/\D/g, "");
  const note = message ? `\nNota: ${message}` : "";
  const text = [
    `Hola, quiero reservar en ${RESTAURANT_INFO.name}.`,
    ``,
    `Nombre: ${name}`,
    `Email: ${email}`,
    `Teléfono: ${phone}`,
    `Fecha: ${date}`,
    `Horario: ${time}hs`,
    `Personas: ${guests}`,
    note,
  ]
    .filter(Boolean)
    .join("\n");

  const whatsappUrl = `https://wa.me/${restaurantPhone}?text=${encodeURIComponent(text)}`;

  return { ok: true, whatsappUrl };
}
