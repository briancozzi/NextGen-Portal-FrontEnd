import { User } from '@api/users/types';
import { TextField } from '@components/common';
import Select, { SelectOption } from '@components/common/Select';
import { Button, Flex } from '@radix-ui/themes';
import FormRow from './FormRow';
// import DatePicker from '@components/common/DatePicker';
import useForm, { FormProps } from './forms/useForm';
import { Controller, SubmitHandler } from 'react-hook-form';
import { useCallback, useEffect } from 'react';
import { useMutationAddUser, useMutationUpdateUser } from '@mutations';
import { useToast } from '@components/common/hooks';
import ImageField from '@components/common/ImageField';

interface Props {
  user?: User | null;
}

const UserForm = ({ user }: Props) => {
  const methods = useForm();
  const { control, reset, formState } = methods;
  const { showToast } = useToast();

  const resetForm = useCallback(() => {
    if (user) {
      reset(user);
    }
  }, [user, reset]);

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  const suffixOptions: Array<SelectOption> = [
    { value: 'Ph.D', label: 'Ph.D' },
    { value: 'M.D.', label: 'M.D.' },
    { value: 'Esq.', label: 'Esq.' },
    { value: 'CPA', label: 'CPA' },
  ];

  const jobTitleOptions: Array<SelectOption> = [
    { value: 'practice group director', label: 'Practice Group Director' },
    { value: 'paralegal', label: 'Paralegal' },
    { value: 'member', label: 'Member' },
    { value: 'junior associate', label: 'Junior Associate' },
    { value: 'associate', label: 'Associate' },
    { value: 'senior associate', label: 'Senior Associate' },
    { value: 'junior partner', label: 'Junior Partner' },
    { value: 'senior partner', label: 'Senior Partner' },
  ];

  // const departmentOptions: Array<SelectOption> = [
  //   { value: 'department 1', label: 'Department 1' },
  //   { value: 'department 2', label: 'Department 2' },
  //   { value: 'department 3', label: 'Department 3' },
  // ];

  // const officeOptions: Array<SelectOption> = [
  //   { value: 'office 1', label: 'Office 1' },
  //   { value: 'office 2', label: 'Office 2' },
  //   { value: 'office 3', label: 'Office 3' },
  // ];

  // const dashboardOptions: Array<SelectOption> = [
  //   { value: 'dashboard 1', label: 'Dashboard 1' },
  //   { value: 'dashboard 2', label: 'Dashboard 2' },
  //   { value: 'dashboard 3', label: 'Dashboard 3' },
  // ];

  const { mutate: addUser } = useMutationAddUser({
    onSuccess: () => showToast('Successfully created a user', 'success'),
    onError: () => showToast('Failed to create a user', 'error'),
  });

  const { mutate: updateUser } = useMutationUpdateUser({
    onSuccess: () => showToast('Successfully updated a user', 'success'),
    onError: () => showToast('Failed to update a user', 'error'),
  });

  const onSubmit: SubmitHandler<FormProps> = (data) => {
    if (data?.id) {
      updateUser(data);
    } else {
      addUser(data);
    }
  };

  return (
    <Flex p={'4'} width={'100%'} direction={'column'} gap={'6'} maxWidth={'1000px'}>
      <Flex width={'100%'} gap={'4'}>
        <Flex width={'50%'} direction={'column'} gap={'3'}>
          <FormRow label={'Username'} errorMessage={formState.errors.username?.message}>
            <Controller
              control={control}
              name={'username'}
              render={({ field }) => <TextField value={field.value} onChange={field.onChange} />}
            />
          </FormRow>
          <FormRow label={'First Name'} errorMessage={formState.errors.firstName?.message}>
            <Controller
              control={control}
              name={'firstName'}
              render={({ field }) => <TextField value={field.value} onChange={field.onChange} />}
            />
          </FormRow>
          <FormRow label={'Last Name'}>
            <Controller
              control={control}
              name={'lastName'}
              render={({ field }) => <TextField value={field.value} onChange={field.onChange} />}
            />
          </FormRow>
          <FormRow label={'Middle Initial'}>
            <Controller
              control={control}
              name={'middleInitial'}
              render={({ field }) => <TextField value={field.value} onChange={field.onChange} />}
            />
          </FormRow>
          <FormRow label={'Suffix'}>
            <Controller
              control={control}
              name={'suffix'}
              render={({ field }) => (
                <Select
                  options={suffixOptions}
                  placeholder={'Select Suffix'}
                  defaultValue={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </FormRow>
          <FormRow label={'Display Name'}>
            <Controller
              control={control}
              name={'displayName'}
              render={({ field }) => <TextField value={field.value} onChange={field.onChange} />}
            />
          </FormRow>
          <FormRow label={'Job Title'}>
            <Controller
              control={control}
              name={'jobTitle'}
              render={({ field }) => (
                <Select
                  options={jobTitleOptions}
                  placeholder={'Select Title'}
                  defaultValue={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </FormRow>
        </Flex>
        <Flex width={'50%'} direction={'column'} gap={'3'}>
          <FormRow label={'Job Title'}>
            <Controller
              control={control}
              name={'jobTitle'}
              render={({ field }) => (
                <Select
                  options={jobTitleOptions}
                  placeholder={'Select Title'}
                  defaultValue={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </FormRow>
          <FormRow label={'User Photo'}>
            <Controller
              control={control}
              name={'photo'}
              render={({ field }) => <ImageField value={field.value} onChange={field.onChange} />}
            />
          </FormRow>
        </Flex>
      </Flex>
      <Flex width={'100%'} justify={'center'}>
        <Button
          onClick={() => {
            methods.handleSubmit(onSubmit)();
          }}
        >
          {user?.id ? 'Update User' : 'Create User'}
        </Button>
      </Flex>
    </Flex>
  );
};

export default UserForm;
