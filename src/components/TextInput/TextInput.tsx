import { ChangeEventHandler, FC } from "react";

type Props = {
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const TextInput: FC<Props> = ({ label, value, onChange }) => {
  return (
    <div style={{ paddingBottom: 10 }}>
      <label style={{ color: "white" }}>{label}</label>
      <input onChange={onChange} value={value} />
    </div>
  );
};

export default TextInput;
