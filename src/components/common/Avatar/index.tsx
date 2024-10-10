import { Avatar as RadixAvatar, Flex, Text, Box } from '@radix-ui/themes';
import * as Popover from '@radix-ui/react-popover';
import IconSwitch from '@icons/IconSwitch';
import SwitchOrgModal from '@components/SwitchOrgModal';
import './styles.css';
import { useState } from 'react';

interface Props {
  imgSrc?: string;
  fallback: string;
}

const Avatar = ({ imgSrc, fallback }: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <Popover.Root>
        <Popover.Trigger>
          <RadixAvatar
            className={'NextGen-ProfileContainer'}
            height={'40px'}
            width={'40px'}
            style={{ border: '2px solid #D8D8FE' }}
            src={imgSrc}
            fallback={fallback ?? 'A'}
          />
        </Popover.Trigger>
        <Popover.Anchor />
        <Popover.Portal>
          <Popover.Content style={{ marginTop: '8px' }} align={'end'}>
            <Popover.Close />
            <Flex className={'NextGen-ProfileMenuContainer '}>
              <Flex className={'NextGen-ProfileContainer'}>
                <RadixAvatar
                  style={{ border: '2px solid #D8D8FE', height: '40px', width: '40px', borderRadius: '100%' }}
                  src={imgSrc}
                  fallback={fallback ?? 'A'}
                />
                <span className={'NextGen-Text'}>{'View Profile'}</span>
              </Flex>
              <div className={'NextGen-separator'} />
              <Flex
                className={'NextGen-SwitchOrgContainer'}
                justify={'between'}
                align={'center'}
                onClick={() => {
                  setIsModalVisible(true);
                }}
              >
                <Text color={'red'} className={'NextGen-Text'}>
                  {'Switch Organization'}
                </Text>
                <Box className={'NextGen-IconSwitchContainer'}>
                  <IconSwitch />
                </Box>
              </Flex>
            </Flex>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
      <SwitchOrgModal open={isModalVisible} handleClose={(isOpen) => setIsModalVisible(isOpen)} />
    </>
  );
};

export default Avatar;
