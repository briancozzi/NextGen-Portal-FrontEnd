import { IconProps } from './types';

const IconEmail = ({ width = 20, height = 16, color = '#141B34' }: IconProps) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 20 16' fill='none'>
    <path
      d='M5 5L8.75 8C9.10472 8.28401 9.54559 8.43875 10 8.43875C10.4544 8.43875 10.8953 8.28401 11.25 8L15 5M19 13V3C19 2.46957 18.7893 1.96086 18.4142 1.58579C18.0391 1.21071 17.5304 1 17 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V13C1 13.5304 1.21071 14.0391 1.58579 14.4142C1.96086 14.7893 2.46957 15 3 15H17C17.5304 15 18.0391 14.7893 18.4142 14.4142C18.7893 14.0391 19 13.5304 19 13Z'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default IconEmail;
