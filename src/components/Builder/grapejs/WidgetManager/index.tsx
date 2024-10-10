import Search from '@components/Topbar/Search';
import { IconPlus, IconCross } from '@icons';
import { Button, Flex, Text } from '@radix-ui/themes';
import { useState } from 'react';

const WidgetManager = () => {
  const [isWidgetOpen, setIsWidgetOpen] = useState(true);
  const toggleWidget = () => setIsWidgetOpen((prevState) => !prevState);
  return (
    <Flex
      className={'gjs-one-bg'}
      direction={'column'}
      height={'100%'}
      style={{ width: isWidgetOpen ? '280px' : '50px' }}
    >
      <Flex p={'3'} pb={'0'} direction={'column'} gap={'3'}>
        <Flex justify={'between'} width={'100%'}>
          {isWidgetOpen && (
            <Text size={'4'} weight={'bold'}>
              {'Widget Library'}
            </Text>
          )}
          <Button
            style={{ backgroundColor: 'white', borderRadius: '100%', width: '32px', padding: '0px', border: '0px' }}
            onClick={toggleWidget}
          >
            {isWidgetOpen ? <IconCross /> : <IconPlus />}
          </Button>
        </Flex>
        {isWidgetOpen && <Search />}
        {isWidgetOpen && (
          <Text size={'3'} style={{ color: '#868B99' }}>
            {'Basic Widgets'}
          </Text>
        )}
      </Flex>
      <div id='blocks' style={{ display: isWidgetOpen ? 'flex' : 'none', flexDirection: 'row' }} />
    </Flex>
  );
};

export default WidgetManager;
