import { Box, Heading } from '@radix-ui/themes';

interface Props {
  children: string;
}

const PageTitle = ({ children }: Props) => {
  return (
    <Box pb={'4'} width={'100%'} style={{ borderBottom: '1px solid black' }}>
      <Heading color={'red'}>{children}</Heading>
    </Box>
  );
};

export default PageTitle;
