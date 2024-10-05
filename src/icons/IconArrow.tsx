import { IconProps } from './types';

const IconArrow = ({ width = 24, height = 24, color = '#0C1116' }: IconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={`${width}px`}
    height={`${height}px`}
    viewBox={`0 0 ${width} ${height}`}
    fill='none'
  >
    <g opacity='0.9'>
      <path d='M7 10L12 15L17 10H7Z' fill={color} />
    </g>
  </svg>
);

export default IconArrow;
