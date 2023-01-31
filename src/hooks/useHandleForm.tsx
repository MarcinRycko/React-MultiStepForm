import { useState } from 'react';
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormTrigger,
} from 'react-hook-form';

type useHandleFormProps = {
  methods: {
    trigger: UseFormTrigger<FieldValues>;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
  };
};

const useHandleForm = ({
  methods: { trigger, handleSubmit },
}: useHandleFormProps) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: string[] = [
    'Personal Data',
    'Account Details',
    'Adress Details',
  ];

  const handleBack = () => {
    setActiveStep((prevState: number) => (prevState === 0 ? 0 : prevState - 1));
  };

  const onSubmit = (formData: { [key: string]: string }) => {
    alert(JSON.stringify(formData));
  };

  const handleNext = async () => {
    const result = await trigger();
    if (result) {
      setActiveStep((prevState: number) =>
        prevState === 3 ? 3 : prevState + 1
      );
      if (activeStep === 2) {
        handleSubmit(onSubmit)();
      }
    }
  };

  return { steps, activeStep, handleNext, handleBack };
};

export default useHandleForm;
