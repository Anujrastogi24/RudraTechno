import { ImageResponse } from "next/og";

export const alt = "Rudra Techno — Custom Websites & Software, Built for You";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0b1120 0%, #1e293b 55%, #0b1120 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              fontSize: 40,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "1px",
            }}
          >
            RUDRA
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "#f97316",
              letterSpacing: "6px",
              paddingTop: "8px",
            }}
          >
            TECHNO
          </div>
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            maxWidth: "900px",
          }}
        >
          Custom Websites & Software, Built for You
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#94a3b8",
            marginTop: "32px",
            maxWidth: "880px",
            lineHeight: 1.4,
          }}
        >
          Request a project, track it in real time, and ship with confidence.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "48px",
            height: "8px",
            width: "180px",
            background: "#f97316",
            borderRadius: "4px",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
