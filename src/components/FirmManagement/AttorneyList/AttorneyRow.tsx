import { User } from '@api/users/types';
import { Hoverable } from '@components/common';
import { IconEmail, IconUser } from '@icons';
import { Avatar, Flex, Text } from '@radix-ui/themes';
import { useNavigate } from 'react-router-dom';

interface Props {
  user: User;
  isLast?: boolean;
}

const AttorneyRow = ({ user, isLast }: Props) => {
  const navigate = useNavigate();

  return (
    <Flex
      px={'5'}
      py={'4'}
      justify={'between'}
      align={'center'}
      style={{
        backgroundColor: '#FFFFFF',
        boxShadow: '0px -1px 0px 0px #F1F1F1 inset',
        border: '1px solid #E5E7EB',
        borderTop: '0',
        borderBottom: '0',
        borderBottomLeftRadius: isLast ? '8px' : '0',
        borderBottomRightRadius: isLast ? '8px' : '0',
      }}
    >
      <Flex width={'100%'} gap={'5'} align={'center'}>
        <Flex align={'center'} gap={'2'} style={{ flex: 1 }}>
          <Avatar src={user.photo} size={'2'} fallback={user.middleInitial} />
          <Text size={'2'}>{`${user.firstName} ${user.lastName}`}</Text>
        </Flex>
        <Text size={'2'} style={{ flex: 1 }}>
          {user.jobTitle}
        </Text>
        <Text size={'2'} style={{ flex: 1 }}>
          {user.office}
        </Text>
        <Text size={'2'} style={{ flex: 1 }}>
          {user.officeRoomNumber ?? 'A256'}
        </Text>
        <Text size={'2'} style={{ flex: 1 }}>
          {user.phoneNumber ?? '97873476899'}
          {<span style={{ color: '#FF4444' }}> | {user.internalExtn ?? '1234'}</span>}
        </Text>
      </Flex>
      <Flex gap={'4'} align={'center'}>
        <Hoverable onClick={() => (window.location.href = `mailto:${user.emailAddress}`)}>
          <IconEmail color='#E42B24' />
        </Hoverable>
        <Hoverable onClick={() => navigate(`/admin/users/${user.id}/edit`)}>
          <IconUser color='#E42B24' />
        </Hoverable>
      </Flex>
    </Flex>
  );
};

export default AttorneyRow;
