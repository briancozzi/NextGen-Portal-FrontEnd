import { Flex, Text } from '@radix-ui/themes';
import createBlock from './createBlock';

const Label = () => {
  return (
    <Flex direction={'column'} height={'110px'} width={'100px'}>
      <Text style={{ fontSize: '60px' }}>{'H'}</Text>
      <Text size={'3'}>{'Header'}</Text>
    </Flex>
  );
};

const Content = () => {
  return <h1>This is a simple title</h1>;
};

const heading = createBlock({
  id: 'heading',
  label: <Label />,
  content: <Content />,
  attributes: { class: 'gjs-block-section' },
});

export default heading;
