import { Flex } from '@radix-ui/themes';
import createBlock from './createBlock';

const imgSrc =
  'data:image/jpeg;base64,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';

const Label = () => {
  return (
    <Flex direction={'column'} height={'110px'} width={'100px'} justify={'center'} align={'center'}>
      <div style={{ padding: '10px' }}>
        <img src={imgSrc} height={'44px'} width={'54px'} />
      </div>

      <div style={{ fontFamily: 'General Sans', fontSize: '16px', fontWeight: '500' }}>{'Image'}</div>
    </Flex>
  );
};

const image = createBlock({
  id: 'image',
  label: <Label />,
  content: {
    tagName: 'img',
    type: 'image',
    style: {
      position: 'absolute',
    },
    droppable: false,
  },
  attributes: {
    class: 'gjs-block-image',
    src: imgSrc,
  },
});

export default image;
