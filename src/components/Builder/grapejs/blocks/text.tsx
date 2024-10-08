import { Flex, Text } from '@radix-ui/themes';
import createBlock from './createBlock';

const Label = () => {
  return (
    <Flex direction={'column'} height={'110px'} width={'100px'}>
      <Text style={{ fontSize: '60px' }}>{'T'}</Text>
      <Text size={'3'}>{'Text'}</Text>
    </Flex>
  );
};

const Content = () => {
  return <span>This is a simple Text</span>;
};

const text = createBlock({
  id: 'text',
  label: <Label />,
  content: <Content />,
  attributes: { class: 'gjs-block-text' },
});

export default text;
