import { IconProps } from './types';

const IconFilter = ({ width = 16, height = 16, color = '#141B34' }: IconProps) => (
  <svg width={width} height={height} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M6.66667 12H9.33333V10.6667H6.66667V12ZM2 4V5.33333H14V4H2ZM4 8.66667H12V7.33333H4V8.66667Z'
      fill={color}
    />
  </svg>
);

export default IconFilter;
