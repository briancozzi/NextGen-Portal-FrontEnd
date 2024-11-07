import { Flex } from '@radix-ui/themes';
import AttorneyList from '@components/FirmManagement/AttorneyList';

const AttorneysPage = () => {
  return (
    <Flex px={'36px'} py={'36px'} width={'100%'} height={'100%'} direction={'column'}>
      <AttorneyList />
    </Flex>
  );
};

export default AttorneysPage;
