import { DASHBOARD_TYPES, DEPARTMENT_TYPES, JOB_TITLE_TYPES, OFFICE_TYPES, SUFFIX_TYPES, User } from '@api/users/types';
import { TextField } from '@components/common';
import Select, { SelectOption } from '@components/common/Select';
import { Button, Flex } from '@radix-ui/themes';
import FormRow from './FormRow';
import useForm, { FormProps } from './forms/useForm';
import { Controller, SubmitHandler } from 'react-hook-form';
import { useCallback, useEffect } from 'react';
import { useMutationAddUser, useMutationUpdateUser } from '@mutations';
import { useToast } from '@components/common/hooks';
import ImageField from '@components/common/ImageField';
import DatePicker from '@components/common/DatePicker';

interface Props {
  user?: User | null;
}

const UserForm = ({ user }: Props) => {
  const methods = useForm();
  const { control, reset, formState } = methods;
  const { showToast } = useToast();

  console.log({ erros: formState.errors });

  const resetForm = useCallback(() => {
    if (user) {
      reset(user);
    }
  }, [user, reset]);

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  const suffixOptions: Array<SelectOption> = SUFFIX_TYPES.map((suffix) => ({ value: suffix, label: suffix }));
  const jobTitleOptions: Array<SelectOption> = JOB_TITLE_TYPES.map((jobTitle) => ({
    value: jobTitle,
    label: jobTitle,
  }));
  const departmentOptions: Array<SelectOption> = DEPARTMENT_TYPES.map((department) => ({
    value: department,
    label: department,
  }));
  const officeOptions: Array<SelectOption> = OFFICE_TYPES.map((office) => ({ value: office, label: office }));
  const dashboardOptions: Array<SelectOption> = DASHBOARD_TYPES.map((dashboard) => ({
    value: dashboard,
    label: dashboard,
  }));

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
          <FormRow label={'Last Name'} errorMessage={formState.errors.lastName?.message}>
            <Controller
              control={control}
              name={'lastName'}
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
          <FormRow label={'Middle Initial'} errorMessage={formState.errors.middleInitial?.message}>
            <Controller
              control={control}
              name={'middleInitial'}
              render={({ field }) => <TextField value={field.value} onChange={field.onChange} />}
            />
          </FormRow>
          <FormRow label={'Suffix'} errorMessage={formState.errors.suffix?.message}>
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
          <FormRow label={'Display Name'} errorMessage={formState.errors.displayName?.message}>
            <Controller
              control={control}
              name={'displayName'}
              render={({ field }) => <TextField value={field.value} onChange={field.onChange} />}
            />
          </FormRow>
          <FormRow label={'Job Title'} errorMessage={formState.errors.jobTitle?.message}>
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
          <FormRow label={'Start Date'} errorMessage={formState.errors.startDate?.message}>
            <Controller
              control={control}
              name={'startDate'}
              render={({ field }) => <DatePicker value={field.value} onChange={field.onChange} />}
            />
          </FormRow>
          <FormRow label={'PG /Department'} errorMessage={formState.errors.department?.message}>
            <Controller
              control={control}
              name={'department'}
              render={({ field }) => (
                <Select
                  options={departmentOptions}
                  placeholder={'Select PG/Department'}
                  defaultValue={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </FormRow>
          <FormRow label={'Timekeeper Number'} errorMessage={formState.errors.timekeeperNumber?.message}>
            <Controller
              control={control}
              name={'timekeeperNumber'}
              render={({ field }) => <TextField value={field.value} onChange={field.onChange} />}
            />
          </FormRow>
          <FormRow label={'Phone Number'} errorMessage={formState.errors.phoneNumber?.message}>
            <Controller
              control={control}
              name={'phoneNumber'}
              render={({ field }) => <TextField value={field.value} onChange={field.onChange} />}
            />
          </FormRow>
          <FormRow label={'Internal Extn.'} errorMessage={formState.errors.internalExtn?.message}>
            <Controller
              control={control}
              name={'internalExtn'}
              render={({ field }) => <TextField value={field.value} onChange={field.onChange} />}
            />
          </FormRow>
          <FormRow label={'Mobile Phone'} errorMessage={formState.errors.mobilePhone?.message}>
            <Controller
              control={control}
              name={'mobilePhone'}
              render={({ field }) => <TextField value={field.value} onChange={field.onChange} />}
            />
          </FormRow>
          <FormRow label={'Assistant Name'} errorMessage={formState.errors.assistantName?.message}>
            <Controller
              control={control}
              name={'assistantName'}
              render={({ field }) => <TextField value={field.value} onChange={field.onChange} />}
            />
          </FormRow>
          <FormRow label={'Office'} errorMessage={formState.errors.office?.message}>
            <Controller
              control={control}
              name={'office'}
              render={({ field }) => (
                <Select
                  options={officeOptions}
                  placeholder={'Select Office'}
                  defaultValue={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </FormRow>
          <FormRow label={'Office Room Number'} errorMessage={formState.errors.officeRoomNumber?.message}>
            <Controller
              control={control}
              name={'officeRoomNumber'}
              render={({ field }) => <TextField value={field.value} onChange={field.onChange} />}
            />
          </FormRow>
          <FormRow label={'Email Address'} errorMessage={formState.errors.emailAddress?.message}>
            <Controller
              control={control}
              name={'emailAddress'}
              render={({ field }) => <TextField value={field.value} onChange={field.onChange} />}
            />
          </FormRow>
        </Flex>
        <Flex width={'50%'} direction={'column'} gap={'3'}>
          <FormRow label={'Default Dashboard'} errorMessage={formState.errors.defaultDashboard?.message}>
            <Controller
              control={control}
              name={'defaultDashboard'}
              render={({ field }) => (
                <Select
                  options={dashboardOptions}
                  placeholder={'Select Dashboard'}
                  defaultValue={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </FormRow>
          <FormRow label={'User Photo'} errorMessage={formState.errors.photo?.message}>
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
          {user?.id ? 'UPDATE USER' : 'CREATE USER'}
        </Button>
      </Flex>
    </Flex>
  );
};

export default UserForm;
