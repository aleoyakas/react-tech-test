import { useEffect, useState } from "react";
import Typography from "../components/Typography";
import Dropdown from "../components/Dropdown";
import DogBreed from "../models/DogBreed";
import DOG_BREEDS from "../models/DogBreeds";
import DogBreedImage from "../containers/DogBreedImage";
import TextInput from "../components/TextInput/TextInput";

function Breed() {
  const [selectedDogBreedId, setSelectedDogBreedId] = useState(
    DogBreed.Unselected
  );
  const [filterText, setFilterText] = useState("");
  const [filteredDogs, setFilteredDogs] = useState(DOG_BREEDS);

  useEffect(() => {
    const rx = new RegExp(`^${filterText}`, "i");
    setFilteredDogs(DOG_BREEDS.filter((breed) => breed.label.match(rx)));
  }, [filterText, DOG_BREEDS]);

  return (
    <>
      <Typography component="h2">Select a Breed</Typography>
      <TextInput
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        label="Filter"
      />
      <Dropdown
        options={filteredDogs}
        selectedOptionId={selectedDogBreedId}
        setSelectedOptionId={setSelectedDogBreedId}
      />
      <DogBreedImage dogBreedId={selectedDogBreedId} />
    </>
  );
}

export default Breed;
