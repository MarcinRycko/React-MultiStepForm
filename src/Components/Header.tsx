import { Container, Typography, Stepper, Step, StepLabel } from '@mui/material';

type HeaderProps = {
  stepsData: {
    steps: string[];
    activeStep: number;
    handleNext: () => void;
    handleBack: () => void;
  };
};

const Header: React.FC<HeaderProps> = ({
  stepsData: { steps, activeStep },
}) => {
  return (
    <>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h4" align="center" sx={{ mb: 6 }}>
          MultiStep Form
        </Typography>
        {activeStep < 3 ? (
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        ) : null}
      </Container>
    </>
  );
};

export default Header;
