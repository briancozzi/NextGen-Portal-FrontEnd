import { Flex, Text } from '@radix-ui/themes';
import createBlock from './createBlock';

const imgSrc =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+';

const Label = () => {
  return (
    <Flex direction={'column'} height={'110px'} width={'100px'} justify={'center'} align={'center'}>
      <img src={imgSrc} height={'80%'} width={'80%'} />
      <Text size={'3'}>{'Image'}</Text>
    </Flex>
  );
};

const Content = () => {
  return <img />;
};

const image = createBlock({
  id: 'image',
  label: <Label />,
  content: <Content />,
  attributes: {
    class: 'gjs-block-image',
    src: imgSrc,
  },
});

export default image;
