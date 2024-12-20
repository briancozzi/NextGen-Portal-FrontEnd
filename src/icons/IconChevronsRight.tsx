import { IconProps } from './types';

const IconChevronRight = ({ width = 16, height = 16, color = '#141B34' }: IconProps) => (
  <svg width={width} height={height} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M4.27337 4L3.33337 4.94L6.38671 8L3.33337 11.06L4.27337 12L8.27337 8L4.27337 4Z' fill={color} />
    <path d='M8.66668 4L7.72668 4.94L10.78 8L7.72668 11.06L8.66668 12L12.6667 8L8.66668 4Z' fill={color} />
  </svg>
);

export default IconChevronRight;
