import { Page } from '@api/pages/types';
import { Hoverable } from '@components/common';
import { IconPencil } from '@icons';
import { Flex, Text } from '@radix-ui/themes';
import { useNavigate } from 'react-router-dom';

interface Props {
  page: Page;
}

const PageRow = ({ page }: Props) => {
  const navigate = useNavigate();

  return (
    <Flex
      px={'5'}
      py={'4'}
      justify={'between'}
      align={'center'}
      style={{ backgroundColor: '#FFFFFF', boxShadow: '0px -1px 0px 0px #F1F1F1 inset' }}
    >
      <Flex align={'center'} gap={'5'}>
        <Text style={{ color: '#242D35' }} weight={'bold'}>
          {page.name}
        </Text>
        <Text size={'2'}>{page.description}</Text>
      </Flex>
      <Flex gap={'5'}>
        <Hoverable onClick={() => navigate(`/pages/${page.id}/edit`)}>
          <IconPencil />
        </Hoverable>
      </Flex>
    </Flex>
  );
};

export default PageRow;
