import { Flex } from '@radix-ui/themes';
import createBlock from './createBlock';

const Label = () => {
  return (
    <Flex style={{ fontFamily: 'General Sans' }} direction={'column'} height={'110px'} width={'100px'}>
      <div style={{ fontSize: '70px', height: '80px', fontWeight: '500' }}>{'T'}</div>
      <div style={{ fontFamily: 'General Sans', fontSize: '16px', fontWeight: '500' }}>{'Text'}</div>
    </Flex>
  );
};

const text = createBlock({
  id: 'text',
  label: <Label />,
  content: {
    tagName: 'p',
    type: 'Paragraph',
    content: 'This is a paragraph',
    style: {
      position: 'absolute',
    },
    droppable: false,
  },
  attributes: { class: 'gjs-block-text' },
});

export default text;
