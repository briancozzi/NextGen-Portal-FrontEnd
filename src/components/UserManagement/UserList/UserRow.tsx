import { User } from '@api/users/types';
import { Hoverable, Switch } from '@components/common';
import { useToast } from '@components/common/hooks';
import { IconPencil } from '@icons';
import { useMutationUpdateUser } from '@mutations';
import { Avatar, Flex, Text } from '@radix-ui/themes';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  user: User;
}

const UserRow = ({ user }: Props) => {
  const [checked, setChecked] = useState(user.active);
  const navigate = useNavigate();
  const { showToast } = useToast();

  const { mutate: updateUser } = useMutationUpdateUser({
    onSuccess: (user) =>
      user.active ? showToast('User is now active', 'success') : showToast('User is now inactive', 'success'),
    onError: () => showToast('Failed to update a user', 'error'),
  });

  const handleCheckedChange = (value: boolean) => {
    setChecked(value);
    updateUser({ ...user, active: value });
  };

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
          <Avatar src={user.photo} size={'4'} fallback={user.middleInitial} />
          <Text style={{ color: '#242D35' }} weight={'bold'}>{`${user.firstName} ${user.lastName}`}</Text>
        </Flex>
        <Text size={'2'}>{user.jobTitle}</Text>
      </Flex>
      <Flex gap={'5'}>
        <Hoverable onClick={() => navigate(`/admin/users/${user.id}/edit`)}>
          <IconPencil />
        </Hoverable>
        <Switch checked={checked} onCheckedChange={handleCheckedChange} />
      </Flex>
    </Flex>
  );
};

export default UserRow;
