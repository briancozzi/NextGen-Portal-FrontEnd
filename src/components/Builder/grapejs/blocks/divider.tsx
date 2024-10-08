import { Box, Flex, Text } from '@radix-ui/themes';
import createBlock from './createBlock';

const Label = () => {
  return (
    <Flex direction={'column'} height={'110px'} width={'100px'}>
      <Flex height={'100px'} width={'100%'} justify={'center'} align={'center'}>
        <Box width={'14px'} height={'14px'} style={{ borderRadius: '100%', border: '2px solid #868B99' }}></Box>
        <Box width={'60px'} height={'4px'} style={{ backgroundColor: '#868B99' }}></Box>
        <Box width={'14px'} height={'14px'} style={{ borderRadius: '100%', border: '2px solid #868B99' }}></Box>
      </Flex>
      <Text size={'3'}>{'Divider'}</Text>
    </Flex>
  );
};

const Content = () => {
  return <div className={'gjs-block-divider'}></div>;
};

const divider = createBlock({
  id: 'divider',
  label: <Label />,
  content: <Content />,
  attributes: { class: 'gjs-block-test' },
});

export default divider;
