import type { SVGProps } from 'react';

const SvgTrash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio='xMidYMid'
    viewBox="0 0 20 20"
    {...props}
  >
<path 
  fillRule="evenodd" 
  clipRule="evenodd" 
  d="M12.0834 2.5L7.91669 2.5L7.08335 3.33333H4.16669V5H15.8334V3.33333L12.9167 3.33333L12.0834 2.5ZM13.3334 7.5V15.8333H6.66669L6.66669 7.5L13.3334 7.5ZM5.00002 5.83333H15V15.8333C15 16.75 14.25 17.5 13.3334 17.5H6.66669C5.75002 17.5 5.00002 16.75 5.00002 15.8333L5.00002 5.83333Z" 
  fill="#CBD5E1"/>
  </svg>
);

export default SvgTrash;
