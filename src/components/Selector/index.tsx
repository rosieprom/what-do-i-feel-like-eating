import { Label, Radio } from "theme-ui";

export interface SelectorProps {
  id: any;
  name: string;
  value: string;
  onChange: (e: any) => any;
  isChecked: boolean;
}

const Selector = ({ id, name, value, onChange, isChecked }: SelectorProps) => {
  return (
    <Label>
      <Radio
        key={id}
        name={name}
        value={value}
        checked={isChecked}
        onChange={onChange}
      />
      {name}
    </Label>
  );
};

export default Selector;
