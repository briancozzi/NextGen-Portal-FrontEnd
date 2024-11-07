import { Button, Flex, Text } from '@radix-ui/themes';
import UserRow from './AttorneyRow';
import AttorneyListHeader from './AttorneyListHeader';
import Search from '@components/Topbar/Search';
import { useQueryUsers } from '@queries';
import { useEffect, useState } from 'react';
import Pagination from '@components/common/Pagination';
import { IconFilter } from '@icons/index';
import FilterSelect from '@components/common/FilterSelect';
import './style.css';

const AttorneyList = () => {
  const [keyword, setKeyword] = useState('');
  const [page, setPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    title: 'All',
    office: '',
    department: 'All',
    education: '',
    license: 'All',
    language: 'All',
  });

  const titleOptions = [
    { value: 'All', label: 'All' },
    { value: 'Senior Partner', label: 'Senior Partner' },
    { value: 'Paralegal', label: 'Paralegal' },
    { value: 'Senior Legal Associate', label: 'Senior Legal Associate' },
    { value: 'Legal Associate', label: 'Legal Associate' },
    { value: 'Trainee Solicitor', label: 'Trainee Solicitor' },
    { value: 'Practice Group Director', label: 'Practice Group Director' },
  ];

  const officeOptions = [
    { value: 'All', label: 'All' },
    { value: 'Office 1', label: 'Office 1' },
    { value: 'Office 2', label: 'Office 2' },
  ];

  const departmentOptions = [
    { value: 'All', label: 'All' },
    { value: 'Corporate', label: 'Corporate' },
    { value: 'Litigation', label: 'Litigation' },
    { value: 'Real Estate', label: 'Real Estate' },
    { value: 'Intellectual Property', label: 'Intellectual Property' },
  ];

  const educationOptions = [
    { value: 'All', label: 'All' },
    { value: 'JD', label: 'JD' },
    { value: 'LLM', label: 'LLM' },
    { value: 'BA', label: 'BA' },
  ];

  const licenseOptions = [
    { value: 'All', label: 'All' },
    { value: 'Bar Association', label: 'Bar Association' },
    { value: 'State Bar', label: 'State Bar' },
    { value: 'Federal Court', label: 'Federal Court' },
  ];

  const languageOptions = [
    { value: 'All', label: 'All' },
    { value: 'English', label: 'English' },
    { value: 'Spanish', label: 'Spanish' },
    { value: 'French', label: 'French' },
    { value: 'German', label: 'German' },
    { value: 'Chinese', label: 'Chinese' },
  ];

  const [sort, setSort] = useState<{ key: string; direction: 'asc' | 'desc' | null }>({
    key: 'name',
    direction: 'asc',
  });

  const handleSort = (key: string) => {
    setSort((prev) => ({
      key,
      direction:
        prev.key === key ? (prev.direction === null ? 'asc' : prev.direction === 'asc' ? 'desc' : null) : 'asc',
    }));
  };

  const query = useQueryUsers({
    request: {
      filters: {
        keyword,
        ...filters,
      },
      pagination: { page, perPage: 10 },
      sort: sort.direction ? { key: sort.key, direction: sort.direction } : undefined,
    },
  });

  useEffect(() => {
    query.refetch();
  }, [keyword, page, query]);

  return (
    <Flex direction={'column'} gap={'4'}>
      <Flex className='list-header' justify={'between'}>
        <Search value={keyword} onChange={setKeyword} placeholder='Search...' />
        <Button variant='ghost' className={showFilters ? 'active' : ''} onClick={() => setShowFilters(!showFilters)}>
          Advanced Filters
          <IconFilter />
        </Button>
      </Flex>

      {showFilters && (
        <Flex direction={'column'} className='filters-container' px='4' py='6' gap='3'>
          <Flex gap='4'>
            <FilterSelect
              label='Title'
              value={filters.title}
              onChange={(value) => setFilters((f) => ({ ...f, title: value }))}
              options={titleOptions}
              placeholder='Title'
              className='filter-select'
            />
            <FilterSelect
              label='Office'
              value={filters.office}
              onChange={(value) => setFilters((f) => ({ ...f, office: value }))}
              options={officeOptions}
              placeholder='Office'
              className='filter-select'
              optional
            />
            <FilterSelect
              label='PG/Department'
              value={filters.department}
              onChange={(value) => setFilters((f) => ({ ...f, department: value }))}
              options={departmentOptions}
              placeholder='PG/Department'
              className='filter-select'
            />
          </Flex>
          <Flex gap='4'>
            <FilterSelect
              label='Education'
              value={filters.education}
              onChange={(value) => setFilters((f) => ({ ...f, education: value }))}
              options={educationOptions}
              placeholder='Education'
              className='filter-select'
              optional
            />
            <FilterSelect
              label='Licenses and Court Admissions'
              value={filters.license}
              onChange={(value) => setFilters((f) => ({ ...f, license: value }))}
              options={licenseOptions}
              placeholder='Licenses and Court Admissions'
              className='filter-select'
            />
            <FilterSelect
              label='Languages Spoken'
              value={filters.language}
              onChange={(value) => setFilters((f) => ({ ...f, language: value }))}
              options={languageOptions}
              placeholder='Languages Spoken'
              className='filter-select'
            />
          </Flex>
        </Flex>
      )}

      <Flex direction={'column'}>
        <AttorneyListHeader sort={sort} onSort={handleSort} />
        {query.data?.map((user: any, index: number) => (
          <UserRow key={user.id} user={user} isLast={index === query.data?.length - 1} />
        ))}
        {!query.data?.length && (
          <Flex width={'100%'} justify={'center'} py={'4'}>
            <Text weight={'medium'} color={'gray'}>
              No attorneys found
            </Text>
          </Flex>
        )}
      </Flex>
      <Pagination currentPage={page} totalPages={query.data?.length || 1} onPageChange={setPage} />
    </Flex>
  );
};

export default AttorneyList;
