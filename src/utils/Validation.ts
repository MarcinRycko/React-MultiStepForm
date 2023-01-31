import { useFormContext } from 'react-hook-form';

const letterRegexp = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/gim;
const emailRegexp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,18}$/;
const postCodeRegexp = /^([0-9]{2})-([0-9]{3})$/gim;

const ValidationRules = () => {
  const { getValues } = useFormContext();

  return {
    nameValidationRules: {
      required: 'This field is required',
      minLength: {
        value: 3,
        message: 'Field must contain minimum 3 characters',
      },
      pattern: {
        value: letterRegexp,
        message: 'Field must contain only letters',
      },
    },
    surnameValidationRules: {
      required: 'This field is required',
      minLength: {
        value: 3,
        message: 'Field must contain minimum 3 characters',
      },
      pattern: {
        value: letterRegexp,
        message: 'Field must contain only letters',
      },
    },
    genderValidationRules: {
      required: 'This field is required',
    },
    dateOfBirthdayValidationRules: {
      required: 'This field is required',
      validate: {
        isAdult: (value: string) => {
          const now = Date.now();
          const date = new Date(`${value}`.replaceAll('-', ', ')).getTime();
          return (
            Math.abs(now - date) / 31556926000 > 18 ||
            'You must be over 18 years old'
          );
        },
        isInRange: (value: string) => {
          const now = Date.now();
          const date = new Date(`${value}`.replaceAll('-', ', ')).getTime();
          return (
            Math.abs(now - date) / 31556926000 < 125 ||
            'Age cant be higher than 125'
          );
        },
      },
    },
    emailValidationRules: {
      required: 'This field is required',
      pattern: {
        value: emailRegexp,
        message: `Please enter a valid email address.`,
      },
    },
    passwordValidationRules: {
      required: 'This field is required',
      minLength: {
        value: 8,
        message: 'Password must contain minimum 8 characters Long.',
      },
      maxLength: {
        value: 18,
        message: 'Password must contain maximum 18 characters Long.',
      },
      pattern: {
        value: passwordRegexp,
        message:
          'Password must contain at least one numeric digit, one uppercase and one lowercase letter.',
      },
      validate: (value: string) => {
        const { confirmPassword } = getValues();
        return confirmPassword === value || 'Passwords should match!';
      },
    },
    confirmPasswordValidationRules: {
      required: 'This field is required',
      pattern: passwordRegexp,
      validate: (value: string) => {
        const { password } = getValues();
        return password === value || 'Passwords should match!';
      },
    },
    countryValidationRules: {
      required: 'This field is required',
      minLength: {
        value: 3,
        message: 'Field must contain minimum 3 characters',
      },
      pattern: {
        value: letterRegexp,
        message: 'Field must contain only letters',
      },
    },
    cityValidationRules: {
      required: 'This field is required',
      minLength: {
        value: 3,
        message: 'Field must contain minimum 3 characters',
      },
      pattern: {
        value: letterRegexp,
        message: 'Field must contain only letters',
      },
    },
    streetValidationRules: {
      required: 'This field is required',
      minLength: {
        value: 3,
        message: 'Field must contain minimum 3 characters',
      },
    },
    stateValidationRules: {
      required: 'This field is required',
      minLength: {
        value: 3,
        message: 'Field must contain minimum 3 characters',
      },
      pattern: {
        value: letterRegexp,
        message: 'Field must contain only letters',
      },
    },
    postCodeValidationRules: {
      required: 'This field is required',
      pattern: {
        value: postCodeRegexp,
        message: 'Field must be fill according to the scheme 00-000',
      },
    },
    termsValidationRules: {
      required: 'This field is required',
    },
  };
};

export { ValidationRules };
