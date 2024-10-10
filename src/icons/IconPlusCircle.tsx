import { IconProps } from './types';

const IconPlusCircle = ({ width = 24, height = 24, color = '#D9D9D9' }: IconProps) => (
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
        d='M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM11 11V8H13V11H16V13H13V16H11V13H8V11H11Z'
        fill={color}
      />
    </g>
  </svg>
);

export default IconPlusCircle;
