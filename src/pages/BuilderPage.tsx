import { Flex } from '@radix-ui/themes';
import Builder from '@components/Builder';

const BuilderPage = () => {
  return (
    <Flex width={'100%'} height={'100%'} direction={'column'}>
      <Builder />
    </Flex>
  );
};

export default BuilderPage;
