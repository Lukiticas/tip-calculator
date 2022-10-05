import {
  InputBody,
  InputElement,
  InputIcon,
  Label,
  Wrapper,
} from "./Input.styles";

interface InputProps {
  name: string;
  type: string;
  label: string;
  iconPath: string;
  inputValue: string;
  placeholder: string;
  required?: boolean;
  setInputState: (value: string, name: string) => void;
}

const Input = (props: InputProps) => {
  const {
    name,
    type,
    label,
    iconPath,
    required,
    inputValue,
    placeholder,
    setInputState,
  } = props;

  const id = Math.floor(Math.random() * (Math.random() * 1000)).toString();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setInputState(value, name);
  };

  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <InputBody>
        <InputIcon src={iconPath} aria-hidden="true" />
        <InputElement
          name={name}
          value={inputValue}
          onChange={(e) => handleChange(e)}
          placeholder={placeholder}
          type={type}
          id={id}
          pattern="[1-9]"
          required={required ? true : false}
        />
      </InputBody>
    </Wrapper>
  );
};

export default Input;
