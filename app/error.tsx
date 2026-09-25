"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#1A1A1A",
        color: "white",
        padding: "24px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "2.5rem",
          fontWeight: 300,
          marginBottom: "12px",
        }}
      >
        Algo salió mal
      </h1>
      <p
        style={{
          fontFamily: "var(--font-montserrat)",
          color: "rgba(255,255,255,0.5)",
          fontSize: "14px",
          marginBottom: "32px",
        }}
      >
        No pudimos cargar esta página. Probá de nuevo.
      </p>
      <button
        type="button"
        onClick={reset}
        style={{
          fontFamily: "var(--font-montserrat)",
          fontSize: "11px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          padding: "12px 28px",
          border: "1px solid #C9A96E",
          color: "#C9A96E",
          background: "transparent",
          cursor: "pointer",
        }}
      >
        Reintentar
      </button>
    </main>
  );
}
