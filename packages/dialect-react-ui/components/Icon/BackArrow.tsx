import type { SVGProps } from 'react';

const SvgBackArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M14.5 6.625L3.85125 6.625L8.7425 1.73375L7.5 0.5L0.5 7.5L7.5 14.5L8.73375 13.2663L3.85125 8.375H14.5V6.625Z" 
          fill="#E2E8EF"/>
  </svg>
);

export default SvgBackArrow;
