import { useEffect, useRef, useState } from "react";
import Card from "./Card";
import narutoCharacters from "./site-data";

const getAnimeCharacters = async function getAnimeCharacters() {
  try {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime/1735/characters`
    );
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      return data;
    }
  } catch (err) {
    console.error("Failed to fetch", err);
    return "https://via.placeholder.com/150";
  }
};

const formatName = function formatName(name) {
  const [first, last] = name.split(" ");
  if (!last) return first;
  return last + ", " + first;
};

const getCharacterImage = async function getCharacterImage(data, name) {
  const formattedName = formatName(name);
  console.log(formattedName);
  for (let i = 0; i < data.length; i++) {
    const char = data[i].character;
    console.log(char.name);
    if (char.name === formattedName) {
      return char.images.jpg.image_url;
    }
  }
  console.log("nothing");
};

const CardContainer = function CardContainer() {
  const [cardData, setCardData] = useState(
    Array(narutoCharacters.length).fill({
      name: "Temp",
      image: "",
    })
  );
  const hasFetched = useRef(false);

  const fetchCharacterImages = async function fetchCharacterImages() {
    const images = [];
    const response = await getAnimeCharacters();
    console.log(response.data);

    for (let i = 0; i < narutoCharacters.length; i++) {
      const name = narutoCharacters[i].name;

      const imageURL = await getCharacterImage(response.data, name);

      images.push({
        name,
        image: imageURL,
      });
    }

    return images;
  };

  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true;
      fetchCharacterImages().then(setCardData);
    }
  }, []);

  return (
    <main className="card-container">
      {cardData.map((data) => {
        console.log("data", data);
        return <Card data={data} key={crypto.randomUUID()} />;
      })}
    </main>
  );
};

export default CardContainer;
