import * as React from "react";
import { SVGProps } from "react";
export default function ArrowSVG(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={800}
      height={800}
      viewBox="0 0 24 24"
      {...props}
    >
      <title />
      <g
        fill="none"
        stroke={props.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path d="m7.6 7-5.1 5 5.1 5" data-name="Right" />
        <path d="M21.5 12H4.8" />
      </g>
    </svg>
  );
}
