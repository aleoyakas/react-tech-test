import { FC } from "react";
import Image from "../../components/Image";
import DogBreed from "../../models/DogBreed";
import useDogBreedImage from "./hooks/useDogBreedImage";

type Props = {
  dogBreedId: DogBreed;
};

const DogBreedImage: FC<Props> = ({ dogBreedId }) => {
  if (!dogBreedId) {
    return null;
  }

  const imgUrl = useDogBreedImage(dogBreedId);

  return (
    <>
      <div style={{ paddingTop: 30 }}>
        {imgUrl && <Image src={imgUrl} alt="dog" />}
      </div>
    </>
  );
};

export default DogBreedImage;
