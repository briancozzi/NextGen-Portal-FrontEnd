import { Flex } from '@radix-ui/themes';
import SortableHeader from '@components/common/SortableHeader';

interface Props {
  sort: { key: string; direction: 'asc' | 'desc' | null };
  onSort: (key: string) => void;
}

const AttorneyListHeader = ({ sort, onSort }: Props) => {
  return (
    <Flex px={'5'} py={'3'} justify={'between'} className='attorney-list-header'>
      <Flex width={'calc(100% - 65px)'} gap={'5'} align={'center'}>
        <SortableHeader
          label="Name"
          sortKey="name"
          currentSort={sort}
          onSort={onSort}
          className='header-cell name'
        />
        <SortableHeader
          label="Title"
          sortKey="jobTitle"
          currentSort={sort}
          onSort={onSort}
          className='header-cell title'
        />
        <SortableHeader
          label="Office"
          sortKey="office"
          currentSort={sort}
          onSort={onSort}
          className='header-cell office'
        />
        <SortableHeader
          label="Room"
          sortKey="officeRoomNumber"
          currentSort={sort}
          onSort={onSort}
          className='header-cell room'
        />
        <SortableHeader
          label="Phone + Extension"
          sortKey="phoneNumber"
          currentSort={sort}
          onSort={onSort}
          className='header-cell phone'
        />
      </Flex>
      <div className='header-cell actions'>Actions</div>
    </Flex>
  );
};

export default AttorneyListHeader;
