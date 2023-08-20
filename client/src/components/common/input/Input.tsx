import React from "react";
import s from "./Input.module.scss";
interface IInput {
  name: string;
  placeholder?: string;
  type?: string;
  register: Function;
  error?: string;
}

export default function Input({
  name,
  placeholder,
  type = "text",
  register,
  error,
}: IInput) {
  return (
    <div className={s.input}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        {...register(name)}
      />
      <div className={s.error}> {error}</div>
    </div>
  );
}
