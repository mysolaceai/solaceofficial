import type { FC, SVGAttributes } from "react";
import { useId } from "react";

export type SolaceAILogoProps = SVGAttributes<SVGSVGElement>;

export default function SolaceAILogo(props: SolaceAILogoProps) {
  const id = useId();

  const gradientId = `solace-ai-logo-gradient-${id}`;

  return (
    <svg
      width="200"
      height="50"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      {...props}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFB5D6" />
          <stop offset="100%" stopColor="#AB9EFC" />
        </linearGradient>
      </defs>
      <text
        x="10"
        y="35"
        fontSize="30"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
        fill={`url(#${gradientId})`}
      >
        Solace AI
      </text>
    </svg>
  );
}
