import { Flex, Text } from '@radix-ui/themes';
import { ReactNode } from 'react';

interface Props {
  label: string;
  errorMessage?: string;
  children: ReactNode;
}

const FormRow = ({ label, errorMessage, children }: Props) => (
  <Flex direction={'column'} align={'end'} gap={'1'}>
    <Flex width={'100%'} align={'start'} justify={'start'} gap={'3'}>
      <Flex width={'50%'} justify={'end'} pt={'1'}>
        <Text style={{ color: '#000' }} weight={'medium'}>
          {label}
        </Text>
      </Flex>
      <Flex width={'50%'} direction={'column'} gap={'1'} justify={'start'}>
        {children}
      </Flex>
    </Flex>
    <Text color={'red'} size={'1'}>
      {errorMessage}
    </Text>
  </Flex>
);

export default FormRow;
