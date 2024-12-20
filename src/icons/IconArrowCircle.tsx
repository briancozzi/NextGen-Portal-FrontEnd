import { IconProps } from './types';

const IconArrowCircle = ({ width = 24, height = 24, color = '#484848' }: IconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={`${width}px`}
    height={`${height}px`}
    viewBox={`0 0 ${width} ${height}`}
    fill='none'
  >
    <g opacity='0.9'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
        fill={'#484848'}
      />
      <path d='M8 13.1369L8.75 13.9354L12.75 9.80589L12 9.00739L8 13.1369Z' fill={color} />
      <path d='M15.25 13.9354L16 13.1369L12 9.0074L11.25 9.8059L15.25 13.9354Z' fill={color} />
    </g>
  </svg>
);

export default IconArrowCircle;
