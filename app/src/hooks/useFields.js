import { useState } from "react";

export const useFields = (obj) => {
  const [fields, setFields] = useState(obj);

  const onChange = (evt) => {
    setFields((prev) => ({ ...prev, [evt.target.name]: evt.target.value }));
  };

  const resetFields = (form) => {
    form.childNodes.forEach((input) => {input.value=null;});
    setFields(obj);
  };

  return { resetFields, fields, onChange };
};
