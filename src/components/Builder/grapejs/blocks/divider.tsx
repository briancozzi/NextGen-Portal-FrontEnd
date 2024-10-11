import { Box, Flex } from '@radix-ui/themes';
import createBlock from './createBlock';

const Label = () => {
  return (
    <Flex direction={'column'} height={'110px'} width={'100px'}>
      <Flex height={'85px'} width={'100%'} justify={'center'} align={'center'} px={'3'}>
        <Box width={'14px'} height={'14px'} style={{ borderRadius: '100%', border: '2px solid #868B99' }}></Box>
        <Box width={'60px'} height={'4px'} style={{ backgroundColor: '#868B99' }}></Box>
        <Box width={'14px'} height={'14px'} style={{ borderRadius: '100%', border: '2px solid #868B99' }}></Box>
      </Flex>
      <div style={{ fontFamily: 'General Sans', fontSize: '16px', fontWeight: '500' }}>{'Divider'}</div>
    </Flex>
  );
};

const divider = createBlock({
  id: 'divider',
  label: <Label />,
  content: {
    tagName: 'div',
    type: 'divider',
    content: '',
    style: {
      position: 'absolute',
      'background-color': '#868b99',
      height: '1px',
      width: '100%',
      margin: '16px 0px 16px 0px',
      opacity: '.7',
    },
    resizable: true,
    droppable: false,
  },
});

export default divider;
