import * as Yup from 'yup';

const initializeYupLocale = () => {
  Yup.setLocale({
    mixed: {
      required: 'This field is required',
    },
  });
};

export default initializeYupLocale;
