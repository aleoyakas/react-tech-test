import { useEffect, useState } from "react";
import DogBreed from "../../../models/DogBreed";

const useDogBreedImage = (dogBreedId: DogBreed) => {
  const [imgUrl, setImgUrl] = useState<string | undefined>();

  const fetchDogImageUrl = async () => {
    const response = await fetch(
      `https://dog.ceo/api/breed/${dogBreedId}/images/random`
    );
    const body = await response.json();
    if (body?.status === "success" && typeof body?.message === "string") {
      setImgUrl(body.message);
    }
  };

  useEffect(() => {
    if (dogBreedId !== DogBreed.Unselected) {
      fetchDogImageUrl();
    }
  }, [dogBreedId]);

  return imgUrl;
};

export default useDogBreedImage;
