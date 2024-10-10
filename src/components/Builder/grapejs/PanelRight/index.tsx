import { Flex, Box } from '@radix-ui/themes';
import { useState } from 'react';
import './styles.css';

const PanelRight = () => {
  const [isStyleOpen, setIsStyleOpen] = useState(true);

  return (
    <div className='panel__right gjs-one-bg'>
      <Flex p={'2'} pt={'0'} pl={'0'}>
        <Box
          py={'1'}
          px={'3'}
          className={`NextGen-tab ${isStyleOpen ? '' : 'NextGen-tab--active'}`}
          onClick={() => setIsStyleOpen(false)}
        >
          {'Layer'}
        </Box>
        <Box
          py={'1'}
          px={'3'}
          className={`NextGen-tab ${isStyleOpen ? 'NextGen-tab--active' : ''}`}
          onClick={() => setIsStyleOpen(true)}
        >
          {'Style'}
        </Box>
      </Flex>
      <div className='layers-container' style={{ display: isStyleOpen ? 'none' : 'block' }}></div>
      <div style={{ display: isStyleOpen ? 'block' : 'none' }}>
        <div className='selector-container'></div>
        <div className='styles-container'></div>
        <div className='layer-container'></div>
      </div>
    </div>
  );
};

export default PanelRight;
