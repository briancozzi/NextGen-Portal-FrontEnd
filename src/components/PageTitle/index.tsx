import { Box, Heading } from '@radix-ui/themes';

interface Props {
  children: string;
}

const PageTitle = ({ children }: Props) => {
  return (
    <Box px={'24px'} pb={'4'} width={'100%'}>
      <Heading color={'red'}>{children}</Heading>
      <Box mt={'4'} style={{ borderBottom: '1px solid black' }} />
    </Box>
  );
};

export default PageTitle;
