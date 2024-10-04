import { Flex } from '@radix-ui/themes';
import PageHeader from '../components/PageHeader';

const SidebarSettingsPage = () => {
  return (
    <Flex p={'3'} width={'100%'} height={'100%'} direction={'column'}>
      <PageHeader>Sidebar Settings Page</PageHeader>
    </Flex>
  );
};

export default SidebarSettingsPage;
