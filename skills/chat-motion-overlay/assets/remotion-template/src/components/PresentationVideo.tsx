import React from "react";
import {AbsoluteFill, Sequence, useCurrentFrame} from "remotion";

export const PresentationVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const textProgress = Math.min(1, Math.max(0, (frame - 780) / 90));
  const conclusionLines = [
    "Concevoir sans flou.",
    "Aligner le terrain et le bureau d'etudes.",
    "Anticiper avant d'executer.",
  ];
  const visibleConclusion = Math.ceil(textProgress * conclusionLines.length);

  return (
    <AbsoluteFill style={{backgroundColor: "#1e293b", fontFamily: "system-ui, sans-serif"}}>
      <Sequence from={0} durationInFrames={240}>
        <div style={{display: "flex", width: "100%", height: "100%"}}>
          <div style={{flex: 1, borderRight: "2px solid #334155", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <span style={{color: "#94a3b8", fontSize: 32}}>Chantier / Terrain</span>
          </div>
          <div style={{flex: 1, display: "flex", alignItems: "center", justifyContent: "center"}}>
            <span style={{color: "#94a3b8", fontSize: 32}}>Plans &amp; Documents</span>
          </div>
        </div>
        <div style={{position: "absolute", bottom: 40, width: "100%", textAlign: "center", color: "#475569", fontSize: 24, letterSpacing: 8}}>
          OPC • CCTP • DPGF • APD
        </div>
      </Sequence>

      <Sequence from={240} durationInFrames={420}>
        <AbsoluteFill style={{backgroundColor: "#0f172a", justifyContent: "center", alignItems: "center"}}>
          <div style={{textAlign: "center", color: "#f8fafc"}}>
            {frame < 380 && <h2 style={{fontSize: 48, borderBottom: "2px solid #f59e0b"}}>1. OPC</h2>}
            {frame >= 380 && frame < 520 && <h2 style={{fontSize: 48, borderBottom: "2px solid #f59e0b"}}>2. CCTP / DPGF</h2>}
            {frame >= 520 && <h2 style={{fontSize: 48, borderBottom: "2px solid #f59e0b"}}>3. Audit / APD</h2>}
          </div>
        </AbsoluteFill>
      </Sequence>

      <Sequence from={660} durationInFrames={120}>
        <AbsoluteFill style={{backgroundColor: "#1e293b", justifyContent: "center", alignItems: "center", border: "4px solid #f59e0b"}}>
          <h2 style={{color: "#f8fafc", fontSize: 44}}>Projet Aligne - Execution Maitrisee</h2>
        </AbsoluteFill>
      </Sequence>

      <Sequence from={780} durationInFrames={120}>
        <AbsoluteFill style={{backgroundColor: "#f8fafc", justifyContent: "center", alignItems: "center", padding: 80}}>
          <div style={{color: "#0f172a", fontSize: 36, lineHeight: 1.8, fontWeight: 500}}>
            {conclusionLines.slice(0, visibleConclusion).map((line, index) => (
              <p key={line} style={{margin: index === 2 ? "20px 0 0" : 0, color: index === 2 ? "#d97706" : "#0f172a", fontWeight: index === 2 ? 700 : 500}}>
                {line}
              </p>
            ))}
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};