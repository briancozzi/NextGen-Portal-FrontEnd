import { useForm as useFormReactHook } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Page } from '@api/pages/types';

export type FormProps = Page;

const useForm = () => {
  const schema = yup
    .object({
      name: yup.string().required(),
      slug: yup.string().required(),
      description: yup.string().optional(),
    })
    .required();

  const methods = useFormReactHook({
    resolver: yupResolver(schema),
  });

  return methods;
};

export default useForm;
