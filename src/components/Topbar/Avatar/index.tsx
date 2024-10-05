import { Flex } from '@radix-ui/themes';
import IconBell from '../../../icons/IconBell';

const Avatar = () => {
  return (
    <Flex p={'3'} style={{ border: '1px solid #DDD', borderRadius: '100%' }} justify={'center'}>
      <IconBell />
    </Flex>
  );
};

export default Avatar;
