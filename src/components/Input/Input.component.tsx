import {
  Label,
  Wrapper,
  InputBody,
  InputIcon,
  InvalidSpan,
  InputElement,
} from "./Input.styles";

interface InputProps {
  name: string;
  type: string;
  label: string;
  iconPath: string;
  required?: boolean;
  inputValue: string;
  placeholder: string;
  checkValidity?: boolean;
  setInputState: (value: string, name: string) => void;
}

const Input = (props: InputProps) => {
  const id = Math.floor(Math.random() * (Math.random() * 1000)).toString();

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    props.setInputState(target.value, target.name);
  };

  const checkValid = props.inputValue === "0";

  return (
    <Wrapper>
      <Label htmlFor={id}>
        {props.label}{" "}
        {props.checkValidity && checkValid && (
          <InvalidSpan>Can't be 0</InvalidSpan>
        )}
      </Label>
      <InputBody isInvalid={props.checkValidity && checkValid}>
        <InputIcon src={props.iconPath} aria-hidden="true" />
        <InputElement
          id={id}
          name={props.name}
          type={props.type}
          onChange={handleChange}
          value={props.inputValue}
          placeholder={props.placeholder}
        />
      </InputBody>
    </Wrapper>
  );
};

export default Input;
