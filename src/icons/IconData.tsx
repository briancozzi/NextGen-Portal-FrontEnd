import { IconProps } from './types';

const IconData = ({ width = 24, height = 24, color = '#333333' }: IconProps) => (
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
        d='M10 3C8.89543 3 8 3.89543 8 5C8 6.10457 8.89543 7 10 7H14C15.1046 7 16 6.10457 16 5C16 3.89543 15.1046 3 14 3H10ZM5 9C4.44772 9 4 9.44772 4 10V14C4 14.5523 4.44772 15 5 15C5.55228 15 6 14.5523 6 14V11H18V14C18 14.5523 18.4477 15 19 15C19.5523 15 20 14.5523 20 14V10C20 9.44772 19.5523 9 19 9H5ZM15 19C15 17.8954 15.8954 17 17 17H21C22.1046 17 23 17.8954 23 19C23 20.1046 22.1046 21 21 21H17C15.8954 21 15 20.1046 15 19ZM3 17C1.89543 17 1 17.8954 1 19C1 20.1046 1.89543 21 3 21H7C8.10457 21 9 20.1046 9 19C9 17.8954 8.10457 17 7 17H3Z'
        fill={color}
      />
    </g>
  </svg>
);

export default IconData;
