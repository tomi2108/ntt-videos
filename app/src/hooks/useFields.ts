import { useState } from "react";

export const useFields = <T>(obj: T) => {
  const [fields, setFields] = useState(obj);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    setFields((prev) => ({ ...prev, [evt.target.name]: evt.target.value }));
  };

  const resetFields = (currentTarget: EventTarget & HTMLFormElement) => {
    currentTarget.reset();
    setFields(obj);
  };

  return { resetFields, fields, onChange };
};
