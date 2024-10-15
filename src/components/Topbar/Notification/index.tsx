import { Flex } from '@radix-ui/themes';
import { IconBell } from '@icons';

const Notification = () => {
  return (
    <Flex
      p={'3'}
      height={'40px'}
      width={'40px'}
      style={{ border: '1px solid #DDD', borderRadius: '100%' }}
      justify={'center'}
    >
      <IconBell />
    </Flex>
  );
};

export default Notification;
