export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          padding: "50px",
          borderRadius: "20px",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(10px)",
          maxWidth: "600px",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "15px",
            fontWeight: "700",
          }}
        >
          CI/CD Demo 🚀
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#cbd5e1",
            marginBottom: "30px",
          }}
        >
          Next.js application built with pnpm.
        </p>

        <div
          style={{
            display: "inline-block",
            padding: "12px 24px",
            background: "#22c55e",
            color: "#ffffff",
            borderRadius: "999px",
            fontWeight: "600",
          }}
        >
          CI/CD Pipeline Active
        </div>
      </div>
    </main>
  );
}