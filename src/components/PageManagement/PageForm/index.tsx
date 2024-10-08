import { useCallback, useEffect } from 'react';
import useForm, { FormProps } from './useForm';
import { useCurrentUser, useToast } from '@components/common/hooks';
import { Page } from '@api/pages/types';
import { useMutationAddPage, useMutationUpdatePage } from '@mutations';
import { Controller, SubmitHandler } from 'react-hook-form';
import { Button, Flex } from '@radix-ui/themes';
import { TextField } from '@components/common';
import FormRow from './FormRow';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { PAGE_QUERY_KEY } from '@queryKeys';

interface Props {
  page?: Page | null;
}

const PageForm = ({ page }: Props) => {
  const queryClient = useQueryClient();
  const methods = useForm();
  const navigate = useNavigate();
  const currentUser = useCurrentUser();
  const { control, reset, formState } = methods;
  const { showToast } = useToast();

  const resetForm = useCallback(() => {
    if (page) {
      reset(page);
    }
  }, [page, reset]);

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  const { mutate: addPage } = useMutationAddPage({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PAGE_QUERY_KEY] });
      showToast('Successfully created a page', 'success');
    },
    onError: () => showToast('Failed to create a page', 'error'),
  });

  const { mutate: updatePage } = useMutationUpdatePage({
    onSuccess: () => showToast('Successfully updated a page', 'success'),
    onError: () => showToast('Failed to update a page', 'error'),
  });

  const onSubmit: SubmitHandler<FormProps> = (data) => {
    if (data?.id) {
      updatePage(data);
    } else if (currentUser?.id) {
      addPage({ ...data, userId: currentUser.id });
    }
  };

  return (
    <Flex p={'4'} width={'100%'} direction={'column'} gap={'6'} maxWidth={'1000px'}>
      <Flex width={'80%'} gap={'4'} direction={'column'}>
        <FormRow label={'name'} errorMessage={formState.errors.name?.message}>
          <Controller
            control={control}
            name={'name'}
            render={({ field }) => <TextField value={field.value} onChange={field.onChange} />}
          />
        </FormRow>
        <FormRow label={'description'} errorMessage={formState.errors.description?.message}>
          <Controller
            control={control}
            name={'description'}
            render={({ field }) => <TextField value={field.value} onChange={field.onChange} />}
          />
        </FormRow>
        <FormRow label={'slug'} errorMessage={formState.errors.slug?.message}>
          <Controller
            control={control}
            name={'slug'}
            render={({ field }) => <TextField value={field.value} onChange={field.onChange} />}
          />
        </FormRow>
      </Flex>
      <Flex width={'100%'} justify={'center'} gap={'2'}>
        <Button
          onClick={() => {
            methods.handleSubmit(onSubmit)();
          }}
        >
          {page?.id ? 'UPDATE PAGE' : 'CREATE PAGE'}
        </Button>
        {page?.id && (
          <Button variant={'outline'} onClick={() => navigate(`/builder/${page.id}/edit`)}>
            {'GO TO PAGE BUILDER'}
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default PageForm;
