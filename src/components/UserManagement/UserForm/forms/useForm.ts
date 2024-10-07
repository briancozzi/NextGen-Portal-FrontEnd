import { useForm as useFormReactHook } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { DASHBOARD_TYPES, DEPARTMENT_TYPES, JOB_TITLE_TYPES, OFFICE_TYPES, SUFFIX_TYPES, User } from '@api/users/types';

export type FormProps = User;

const useForm = () => {
  const schema = yup
    .object({
      username: yup.string().required(),
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      middleInitial: yup.string().required(),
      suffix: yup.string().oneOf(SUFFIX_TYPES).required(),
      displayName: yup.string().required(),
      jobTitle: yup.string().oneOf(JOB_TITLE_TYPES).required(),
      startDate: yup.string().required(),
      department: yup.string().oneOf(DEPARTMENT_TYPES).required(),
      timekeeperNumber: yup.string().required(),
      phoneNumber: yup.string().required(),
      internalExtn: yup.string().required(),
      mobilePhone: yup.string().required(),
      assistantName: yup.string().required(),
      office: yup.string().oneOf(OFFICE_TYPES).required(),
      officeRoomNumber: yup.number().required(),
      emailAddress: yup.string().email('Invalid email format').required(),
      defaultDashboard: yup.string().oneOf(DASHBOARD_TYPES).required(),
      active: yup.boolean(),
      photo: yup.string().optional(),
    })
    .required();

  const methods = useFormReactHook({
    resolver: yupResolver(schema),
  });

  return methods;
};

export default useForm;
