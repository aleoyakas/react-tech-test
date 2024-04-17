const checkPropertiesUnique = <T>(values: T[], accessor: keyof T) => {
  const seen = new Set();
  return values.every(
    (currentObject) => seen.size !== seen.add(currentObject[accessor]).size
  );
};

export default checkPropertiesUnique;
