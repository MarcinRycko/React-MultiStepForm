import { IMaskInput } from 'react-imask';
import { forwardRef } from 'react';

interface CustomProps {
  onChange: (event: { target: { name: string; value: unknown } }) => void;
  name: string;
}

const PostCodeInputMask = forwardRef<HTMLElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="00-000"
        inputRef={ref as any}
        onAccept={(value) => onChange({ target: { name: props.name, value } })}
      />
    );
  }
);

export { PostCodeInputMask };
