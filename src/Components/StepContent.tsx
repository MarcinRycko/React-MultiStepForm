import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import Summary from './Summary';
import { Typography } from '@mui/material';

type StepContentProps = {
  activeStep: number;
};

const StepContent: React.FC<StepContentProps> = ({ activeStep }) => {
  switch (activeStep) {
    case 0: {
      return <FirstStep />;
    }
    case 1: {
      return <SecondStep />;
    }
    case 2: {
      return <ThirdStep />;
    }
    case 3: {
      return <Summary />;
    }
    default: {
      return <Typography>Error</Typography>;
    }
  }
};

export default StepContent;
