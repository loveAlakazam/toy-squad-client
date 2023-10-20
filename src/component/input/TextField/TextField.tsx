import * as React from "react";
import { TextFieldStyle, TextFieldLabel } from "./TextField.style";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputType extends React.InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegister<FieldValues>;
  label?: string;
  params?: string;
  placeholder?: string;
  disabled?: boolean;
  onclickFunc?: () => void;
  onFocusFunc?: () => void;
  type?: string;
  value?: string;
}

const TextField = ({
  register,
  label,
  params,
  placeholder,
  onclickFunc,
  onFocusFunc,
  type,
  disabled,
  value,
}: InputType) => {
  return (
    <>
      {label && <TextFieldLabel>{label}</TextFieldLabel>}
      <TextFieldStyle
        type={type}
        disabled={disabled}
        autoComplete="off"
        {...(register && params && register(params))}
        placeholder={placeholder}
        onClick={onclickFunc}
        onFocus={onFocusFunc}
        defaultValue={value}
      />
      {/* <ErrorMessage /> */}
    </>
  );
};

export default TextField;
