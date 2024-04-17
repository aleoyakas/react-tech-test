import IOption from "./models/IOption";
import checkPropertiesUnique from "../../utils/checkPropertiesAreUnique";

type Props<T extends string> = {
  options: IOption<T>[];
  selectedOptionId: T;
  setSelectedOptionId: (newOptionId: T) => void;
};

const Dropdown = <T extends string>({
  options,
  selectedOptionId,
  setSelectedOptionId,
}: Props<T>) => {
  const areIdsUnique = checkPropertiesUnique(options, "id");
  if (!areIdsUnique) {
    throw new Error("Option Ids are invalid");
  }

  return (
    <select
      name="breeds"
      id="breeds"
      value={selectedOptionId}
      onChange={(e) => setSelectedOptionId(e.target.value as T)}
    >
      {options.map(({ id, label }) => (
        <option key={id} value={id} onClick={() => setSelectedOptionId(id)}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
