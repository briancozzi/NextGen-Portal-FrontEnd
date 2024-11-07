import { Text } from '@radix-ui/themes';
import { ArrowDownIcon, ArrowUpIcon } from '@radix-ui/react-icons';
import './style.css';

interface SortableHeaderProps {
  label: string;
  sortKey: string;
  currentSort: { key: string; direction: 'asc' | 'desc' | null };
  onSort: (key: string) => void;
  className?: string;
}

const SortableHeader = ({ label, sortKey, currentSort, onSort, className }: SortableHeaderProps) => {
  const isActive = currentSort.key === sortKey;

  return (
    <Text
      size='2'
      weight='medium'
      className={`sortable-header ${className} ${isActive ? 'active' : ''}`}
      onClick={() => onSort(sortKey)}
    >
      {label}
      <div className='sort-icons'>
        {isActive &&
          (currentSort.direction === 'asc' ? (
            <ArrowDownIcon className='sort-icon' />
          ) : (
            currentSort.direction === 'desc' && <ArrowUpIcon className='sort-icon' />
          ))}
      </div>
    </Text>
  );
};

export default SortableHeader;
