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

const heading = createBlock({
  id: 'heading',
  label: <Label />,
  content: {
    tagName: 'h1',
    type: 'Heading',
    content: 'This is a Title',
    style: {
      position: 'absolute',
    },
    resizable: true,
    droppable: false,
  },
});

export default heading;
