import React, { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { CheckIcon, Cross1Icon } from '@radix-ui/react-icons';
import './styles.css';
import { Flex, Text } from '@radix-ui/themes';
import Search from '@components/Topbar/Search';
import organizations from './organizations';

interface Props {
  open: boolean;
  handleClose: (isOpen: boolean) => void;
}

const SwitchOrgModal: React.FC<Props> = ({ open, handleClose }) => {
  const [selectedOrg, setSelectedOrg] = useState('Rimon Law');
  const [showContent, setShowContent] = useState(open);

  useEffect(() => {
    if (open) {
      setShowContent(true);
    } else {
      // Delay the unmounting of content to allow close animation to play
      const timeout = setTimeout(() => setShowContent(false), 300); // Duration should match the CSS animation
      return () => clearTimeout(timeout);
    }
  }, [open]);

  return (
    <Dialog.Root open={open} onOpenChange={handleClose}>
      <Dialog.Portal>
        <Dialog.Overlay className='DialogOverlay' />
        {showContent && (
          <Dialog.Content className='DialogContent' data-state={open ? 'open' : 'closed'}>
            <Flex className={'NextGen-DialogTitleContainer'} direction={'column'}>
              <Flex className='DialogTitle' justify={'between'}>
                <Flex flexGrow={'1'} justify={'center'}>
                  {'Select Organization'}
                </Flex>
                <button className='IconButton' aria-label='Close' onClick={() => handleClose(false)}>
                  <Cross1Icon height={16} width={16} />
                </button>
              </Flex>
              <Flex flexGrow={'1'} justify={'center'}>
                {' You have access to the following organizations.'}
              </Flex>
              <Search />
            </Flex>

            <Flex className='OrgList'>
              {organizations.map((org) => (
                <Flex
                  direction={'row'}
                  align={'center'}
                  className={`NextGen-OrgItemContainer ${
                    selectedOrg === org.name ? 'NextGen-OrgItemContainer--active' : ''
                  }`}
                  onClick={() => setSelectedOrg(org.name)}
                >
                  <img className={'NextGen-OrgImage'} src={org.imageSrc} />
                  <Text className={'NextGen-OrgName'}>{org.name}</Text>
                  {selectedOrg === org.name && (
                    <Flex className={'NexGen-CheckIconCircle'} justify={'center'} align={'center'}>
                      <CheckIcon color={'white'} />
                    </Flex>
                  )}
                </Flex>
              ))}
            </Flex>
          </Dialog.Content>
        )}
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default SwitchOrgModal;
