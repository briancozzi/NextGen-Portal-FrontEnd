import { useParams } from 'react-router-dom';
import useGrapejs from './grapejs/useGrapejs';
import WidgetManager from './grapejs/WidgetManager';
import { useQueryPage } from '@queries';
import PanelRight from './grapejs/PanelRight';

const Builder = () => {
  const { id } = useParams();
  const query = useQueryPage({ id: Number(id) });

  useGrapejs(query?.data, query.isFetching);
  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100%' }}>
      <WidgetManager />
      <div id='gjs' style={{ flexGrow: '1' }}></div>
      <PanelRight />
    </div>
  );
};

export default Builder;
