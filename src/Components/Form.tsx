import Header from './Header';
import Buttons from './Buttons';
import StepContent from './StepContent';
import useHandleForm from '../hooks/useHandleForm';
import { Paper, Container } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';

const Form = () => {
  const methods = useForm();
  const stepsData = useHandleForm({ methods });
  const { activeStep } = stepsData;

  return (
    <div className="App">
      <FormProvider {...methods}>
        <Container component="main" maxWidth="sm" sx={{ mt: 6 }}>
          <Paper variant="outlined" sx={{ py: 6 }}>
            <Header stepsData={stepsData} />
            <StepContent activeStep={activeStep} />
            <Buttons stepsData={stepsData} />
          </Paper>
        </Container>
      </FormProvider>
    </div>
  );
};

export default Form;
