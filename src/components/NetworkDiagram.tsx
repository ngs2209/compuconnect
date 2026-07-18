import { motion } from "framer-motion";
import { serviceNodes } from "../data/content";

// Fixed positions around a circle for 5 service nodes, centre = COMPU CONNECT
const RADIUS = 190;
const CENTER = { x: 260, y: 260 };

function nodePosition(index: number, total: number) {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
  return {
    x: CENTER.x + RADIUS * Math.cos(angle),
    y: CENTER.y + RADIUS * Math.sin(angle),
  };
}

export default function NetworkDiagram() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]" aria-hidden="true">
      <svg viewBox="0 0 520 520" className="h-full w-full overflow-visible">
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4c6fff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#4c6fff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* faint concentric rings */}
        {[120, 160, 200].map((r) => (
          <circle key={r} cx={CENTER.x} cy={CENTER.y} r={r} stroke="#242c40" strokeWidth="1" fill="none" />
        ))}

        {/* connection lines + travelling packets */}
        {serviceNodes.map((node, i) => {
          const p = nodePosition(i, serviceNodes.length);
          return (
            <g key={node.id}>
              <line
                x1={CENTER.x}
                y1={CENTER.y}
                x2={p.x}
                y2={p.y}
                stroke="#242c40"
                strokeWidth="1.5"
              />
              <motion.circle
                r="3.5"
                fill="#29d6c8"
                initial={{ cx: CENTER.x, cy: CENTER.y, opacity: 0 }}
                animate={{ cx: [CENTER.x, p.x], cy: [CENTER.y, p.y], opacity: [0, 1, 0] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
              />
            </g>
          );
        })}

        {/* core */}
        <circle cx={CENTER.x} cy={CENTER.y} r="90" fill="url(#coreGlow)" />
        <motion.circle
          cx={CENTER.x}
          cy={CENTER.y}
          r="46"
          fill="#10151f"
          stroke="#4c6fff"
          strokeWidth="1.5"
          animate={{ r: [46, 49, 46] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <text
          x={CENTER.x}
          y={CENTER.y - 4}
          textAnchor="middle"
          className="font-display"
          fill="#e9ecf4"
          fontSize="13"
          fontWeight="700"
        >
          COMPU
        </text>
        <text
          x={CENTER.x}
          y={CENTER.y + 14}
          textAnchor="middle"
          className="font-display"
          fill="#e9ecf4"
          fontSize="13"
          fontWeight="700"
        >
          CONNECT
        </text>

        {/* service nodes */}
        {serviceNodes.map((node, i) => {
          const p = nodePosition(i, serviceNodes.length);
          return (
            <g key={node.id}>
              <motion.circle
                cx={p.x}
                cy={p.y}
                r="30"
                fill="#161d2c"
                stroke="#242c40"
                strokeWidth="1"
                initial={{ scale: 0.9 }}
                animate={{ scale: [0.95, 1, 0.95] }}
                transition={{ duration: 3.2, repeat: Infinity, delay: i * 0.2 }}
              />
              <foreignObject x={p.x - 44} y={p.y + 34} width="88" height="34">
                <div className="text-center font-mono text-[9px] leading-tight text-muted" style={{ color: "#8c95ab" }}>
                  {node.label}
                </div>
              </foreignObject>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
