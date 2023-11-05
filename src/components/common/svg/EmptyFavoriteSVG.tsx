import * as React from "react";
import { SVGProps } from "react";
export default function EmptyFavoriteSVG(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={800}
      height={800}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke={props.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m10 9.5 4 4m0-4-4 4m2-6.909-.154-.164c-1.978-2.096-5.249-1.85-6.927.522-1.489 2.106-1.132 5.085.806 6.729L12 19l6.275-5.322c1.938-1.645 2.295-4.623.806-6.729-1.678-2.372-4.949-2.618-6.927-.522L12 6.591Z"
      />
    </svg>
  );
}
