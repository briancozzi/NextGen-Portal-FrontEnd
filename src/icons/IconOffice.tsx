import { IconProps } from './types';

const IconOffice = ({ width = 24, height = 24, color = '#D6DADE' }: IconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={`${width}px`}
    height={`${height}px`}
    viewBox={`0 0 ${width} ${height}`}
    fill='none'
  >
    <g opacity='0.9'>
      <path
        d='M12 7V3H2V21H22V7H12ZM6 19H4V17H6V19ZM6 15H4V13H6V15ZM6 11H4V9H6V11ZM6 7H4V5H6V7ZM10 19H8V17H10V19ZM10 15H8V13H10V15ZM10 11H8V9H10V11ZM10 7H8V5H10V7ZM20 19H12V17H14V15H12V13H14V11H12V9H20V19ZM18 11H16V13H18V11ZM18 15H16V17H18V15Z'
        fill={color}
      />
    </g>
  </svg>
);

export default IconOffice;
