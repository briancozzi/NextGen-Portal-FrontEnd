import { User } from '@api/db';
import { Hoverable, Switch } from '@components/common';
import { IconPencil } from '@icons';
import { Avatar, Flex, Text } from '@radix-ui/themes';
import { useState } from 'react';

interface Props {
  user: User;
}

const UserRow = ({ user }: Props) => {
  const [checked, setChecked] = useState(user.active);

  return (
    <Flex
      px={'5'}
      py={'4'}
      justify={'between'}
      align={'center'}
      style={{ backgroundColor: '#FFFFFF', boxShadow: '0px -1px 0px 0px #F1F1F1 inset' }}
    >
      <Flex align={'center'} gap={'5'}>
        <Flex align={'center'} gap={'2'}>
          <Avatar size={'4'} fallback={user.middleInitial} />
          <Text style={{ color: '#242D35' }} weight={'bold'}>{`${user.firstName} ${user.lastName}`}</Text>
        </Flex>
        <Text size={'2'}>{user.jobTitle}</Text>
      </Flex>
      <Flex gap={'5'}>
        <Hoverable>
          <IconPencil />
        </Hoverable>
        <Switch checked={checked} onCheckedChange={(value) => setChecked(value)} />
      </Flex>
    </Flex>
  );
};

export default UserRow;
