import { Button, Flex, Text } from '@radix-ui/themes';

const CreateUserPage = () => {
  return (
    <Flex p={'3'} width={'100%'} height={'100%'} gap={'3'}>
      <Text size={'6'} weight={'medium'}>
        {'Create User Page'}
      </Text>
      <Button>{'Test Button'}</Button>
    </Flex>
  );
};

export default CreateUserPage;
