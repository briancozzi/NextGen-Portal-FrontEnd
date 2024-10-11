import { Flex, Text } from '@radix-ui/themes';
import createBlock from './createBlock';

const Label = () => {
  return (
    <Flex style={{ fontFamily: 'General Sans' }} direction={'column'} height={'100px'} width={'100px'}>
      <div style={{ fontSize: '70px', height: '80px', fontWeight: '500' }}>{'H'}</div>
      <div style={{ fontSize: '16px', fontWeight: '500' }}>{'Header'}</div>
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
