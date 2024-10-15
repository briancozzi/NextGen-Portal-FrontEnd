import Search from '@components/Topbar/Search';
import { IconCross } from '@icons';
import { Flex, Text } from '@radix-ui/themes';
import { useState } from 'react';

const WidgetManager = () => {
  const [isWidgetOpen, setIsWidgetOpen] = useState(true);
  const toggleWidget = () => setIsWidgetOpen((prevState) => !prevState);
  return (
    <Flex
      className={'gjs-one-bg'}
      direction={'column'}
      height={'100%'}
      style={{ width: isWidgetOpen ? '280px' : '56px', transition: 'all ease-in .3s', overflow: 'hidden' }}
    >
      <Flex
        pt={'5'}
        px={isWidgetOpen ? '5' : '3'}
        pb={'0'}
        direction={'column'}
        gap={'3'}
        width={'275px'}
        style={{ transition: 'all ease-in .3s' }}
      >
        <Flex justify={'start'} width={'100%'}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              opacity: isWidgetOpen ? '1' : '0',
              width: isWidgetOpen ? '270px' : '0px',
              transition: 'all ease-in .3s',
              overflow: 'hidden',
            }}
          >
            <Text style={{ width: '270px', fontSize: '22px', fontWeight: 500 }}>{'Widget Library'}</Text>
          </div>
          <button
            style={{
              backgroundColor: 'white',
              borderRadius: '100%',
              width: '32px',
              boxSizing: 'border-box',
              height: '32px',
              border: '0px',
              cursor: 'pointer',
              transform: `${isWidgetOpen ? 'rotate(0deg)' : 'rotate(135deg)'}`,
              transition: 'all ease-in .8s',
            }}
            onClick={toggleWidget}
          >
            <IconCross />
          </button>
        </Flex>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            opacity: isWidgetOpen ? '1' : '0',
            transition: 'all ease-in .3s',
          }}
        >
          <Search />
          <Text size={'3'} style={{ color: '#868B99', fontWeight: '500' }}>
            {'Basic Widgets'}
          </Text>
        </div>
      </Flex>
      <div
        id='blocks'
        style={{
          opacity: isWidgetOpen ? '1' : '0',
          flexDirection: 'row',
          transition: 'all ease-in .3s',
          width: '275px',
        }}
      />
    </Flex>
  );
};

export default WidgetManager;
