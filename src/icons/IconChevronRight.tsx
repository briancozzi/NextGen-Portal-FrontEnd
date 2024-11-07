import { IconProps } from './types';

const IconChevronRight = ({ width = 16, height = 16, color = '#141B34' }: IconProps) => (
  <svg width={width} height={height} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z' fill={color} />
  </svg>
);

export default IconChevronRight;
