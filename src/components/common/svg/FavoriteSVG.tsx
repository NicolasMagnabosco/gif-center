import * as React from "react";
import { SVGProps } from "react";
export default function FavoriteSVG(props: SVGProps<SVGSVGElement>) {
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
        strokeWidth={2}
        d="M19.237 6.237a4.098 4.098 0 0 1 .135 5.654l-7.373 8.11-7.37-8.11a4.098 4.098 0 1 1 6.23-5.316L12 8l1.14-1.425a4.098 4.098 0 0 1 6.097-.338Z"
      />
    </svg>
  );
}
