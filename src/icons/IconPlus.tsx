import { IconProps } from './types';

const IconPlus = ({ width = 32, height = 32, color = '#E42B24' }: IconProps) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill='none'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M17 9C17 8.44772 16.5523 8 16 8C15.4477 8 15 8.44772 15 9L15 15L9 15C8.44771 15 8 15.4477 8 16C8 16.5523 8.44771 17 9 17L15 17L15 23C15 23.5523 15.4477 24 16 24C16.5523 24 17 23.5523 17 23L17 17L23 17C23.5523 17 24 16.5523 24 16C24 15.4477 23.5523 15 23 15L17 15L17 9Z'
      fill={color}
    />
  </svg>
);

export default IconPlus;
