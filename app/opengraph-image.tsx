import { ImageResponse } from "next/og";

export const alt = "Maison Dorée - Fine Dining Buenos Aires";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 50%, #1A1A1A 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            width: 80,
            height: 1,
            background: "#C9A96E",
            marginBottom: 32,
          }}
        />
        <div
          style={{
            fontSize: 72,
            color: "#C9A96E",
            letterSpacing: "0.08em",
            fontWeight: 300,
          }}
        >
          Maison Dorée
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 24,
            color: "rgba(255,255,255,0.65)",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            fontFamily: "Helvetica, Arial, sans-serif",
          }}
        >
          Fine Dining · Recoleta · Buenos Aires
        </div>
        <div
          style={{
            width: 80,
            height: 1,
            background: "#C9A96E",
            marginTop: 32,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
