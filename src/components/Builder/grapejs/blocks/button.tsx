import { Box, Flex, Text } from '@radix-ui/themes';
import createBlock from './createBlock';
import IconHand from '@icons/IconHand';

const Label = () => {
  return (
    <Flex
      direction={'column'}
      position={'relative'}
      height={'110px'}
      width={'100px'}
      justify={'center'}
      align={'center'}
    >
      <Box position={'absolute'} top={'40%'}>
        <IconHand />
      </Box>
      <Flex height={'100px'} width={'100%'} justify={'center'} align={'center'}>
        <Flex
          height={'30px'}
          width={'80%'}
          style={{ backgroundColor: '#CED3DE', border: '2px solid #868B99', borderRadius: '20px' }}
        />
      </Flex>
      <Text size={'3'}>{'Button'}</Text>
    </Flex>
  );
};

const button = createBlock({
  id: 'button',
  label: <Label />,
  content: {
    tagName: 'button',
    type: 'Button',
    content: 'Button',
    style: {
      position: 'absolute',
      'background-color': '#e42b24',
      'min-width': '100px',
      color: 'white',
      border: 'none',
      'border-radius': '20px',
      padding: '12px',
    },
    resizable: true,
    droppable: false,
  },
  attributes: { class: 'gjs-block-button' },
});

export default button;
