import { useForm as useFormReactHook } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { User } from '@api/users/types';

export type FormProps = User;

const DEFAULT_VALUES: FormProps = {
  username: '',
  firstName: '',
  lastName: '',
  middleInitial: '',
  suffix: '',
  displayName: '',
  jobTitle: '',
  active: false,
};

const useForm = () => {
  const schema = yup
    .object({
      username: yup.string().required(),
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      middleInitial: yup.string().required(),
      suffix: yup.string().required(),
      displayName: yup.string().required(),
      jobTitle: yup.string().required(),
      active: yup.boolean().required(),
    })
    .required();

  const methods = useFormReactHook({
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(schema),
  });

  return methods;
};

export default useForm;
