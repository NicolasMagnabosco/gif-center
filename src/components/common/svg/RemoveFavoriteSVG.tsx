import * as React from "react";
import { SVGProps } from "react";
export default function RemoveFavoriteSVG(props: SVGProps<SVGSVGElement>) {
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
        d="m19 5-.914.914M5 19l3.213-3.213m9.873-9.873c-1.772-1.352-4.295-1.222-5.932.513L12 6.591l-.154-.164c-1.978-2.096-5.249-1.85-6.927.522-1.489 2.106-1.132 5.085.806 6.729l2.488 2.11m9.873-9.874-9.873 9.873M9.643 17 12 19l6.275-5.322C19.908 12.292 20.419 9.96 19.648 8"
      />
    </svg>
  );
}
