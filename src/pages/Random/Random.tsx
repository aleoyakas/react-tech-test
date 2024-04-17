import { useEffect, useState } from "react";
import Typography from "../../components/Typography";
import Image from "../../components/Image";
import Button from "../../components/Button";
import classes from "./styles.module.css";

function Random() {
  const [imgUrl, setImgUrl] = useState<string | undefined>();

  const fetchDogImageUrl = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const body = await response.json();
    console.log(body);
    if (body?.status === "success" && typeof body?.message === "string") {
      setImgUrl(body.message);
    }
  };

  useEffect(() => {
    fetchDogImageUrl();
  }, []);

  return (
    <>
      <Typography component="h2">Random Dog</Typography>
      {imgUrl && (
        <>
          <Image src={imgUrl} alt="dog" />
          <div className={classes["refetch_button"]}>
            <Button onClick={fetchDogImageUrl}>Fetch another</Button>
          </div>
        </>
      )}
    </>
  );
}

export default Random;
