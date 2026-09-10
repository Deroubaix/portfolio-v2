import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { site } from "../content/site";
import { baseUrl } from "../lib/base-url";

export const alt = `${site.name.first} ${site.name.last} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const font = (file: string) =>
  readFileSync(join(process.cwd(), "src/assets/fonts", file));

const CREAM = "#efede6";
const INK = "#16150f";
const MUTE = "#6a6656";
const RED = "#ca2f19";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: CREAM,
          color: INK,
          padding: "56px 64px",
          fontFamily: "Archivo",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 20,
              letterSpacing: 3,
              color: MUTE,
              textTransform: "uppercase",
            }}
          >
            <span>{site.role}</span>
            <span>{site.location}</span>
          </div>
          <div
            style={{
              display: "flex",
              height: 1,
              background: "rgba(22,21,15,0.28)",
              marginTop: 20,
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 132, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>
            {site.name.first.toUpperCase()}
          </div>
          <div style={{ display: "flex", fontSize: 132, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>
            {site.name.last.toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              height: 1,
              background: "rgba(22,21,15,0.28)",
              marginBottom: 20,
            }}
          />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div style={{ display: "flex", fontSize: 26, color: INK, maxWidth: 760, lineHeight: 1.35 }}>
              {site.lead}
            </div>
            <div style={{ display: "flex", alignItems: "center", fontSize: 20, letterSpacing: 2, color: MUTE }}>
              <div style={{ display: "flex", width: 10, height: 10, borderRadius: 10, background: RED, marginRight: 12 }} />
              {baseUrl().replace(/^https?:\/\//, "")}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Archivo", data: font("Archivo-Regular.ttf"), weight: 400, style: "normal" },
        { name: "Archivo", data: font("Archivo-Bold.ttf"), weight: 700, style: "normal" },
      ],
    },
  );
}
