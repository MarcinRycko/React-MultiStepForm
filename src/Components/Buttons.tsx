import { Button, Container } from '@mui/material';
import { useFormContext } from 'react-hook-form';

type ButtonsProps = {
  stepsData: {
    activeStep: number;
    handleNext: () => void;
    handleBack: () => void;
  };
};

const Buttons: React.FC<ButtonsProps> = ({
  stepsData: { activeStep, handleNext, handleBack },
}) => {
  const { handleSubmit } = useFormContext();

  return (
    <>
      <Container
        maxWidth="sm"
        sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}
      >
        {activeStep > 0 && (
          <Button
            fullWidth
            variant="contained"
            onClick={handleBack}
            sx={{ mt: 3 }}
          >
            Back
          </Button>
        )}
        {activeStep < 3 ? (
          <Button
            fullWidth
            variant="contained"
            onClick={handleNext}
            sx={{ mt: 3 }}
          >
            {activeStep === 2 ? 'Submit' : 'Next'}
          </Button>
        ) : null}
      </Container>
    </>
  );
};

export default Buttons;
