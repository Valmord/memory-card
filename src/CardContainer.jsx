import { useEffect, useRef, useState } from "react";
import Card from "./Card";
import narutoCharacters from "./site-data";

const getAnimeCharacters = async function getAnimeCharacters() {
  try {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime/1735/characters`
    );
    const data = await response.json();
    if (response.ok) {
      return data;
    }
  } catch (err) {
    console.error("Failed to fetch", err);
    return "https://via.placeholder.com/150";
  }
};

const formatName = function formatNameForSearch(name) {
  const [first, last] = name.split(" ");
  if (!last) return first;
  return last + ", " + first;
};

const getCharacterImage = async function getCharacterImage(data, name) {
  const formattedName = formatName(name);
  for (let i = 0; i < data.length; i++) {
    const char = data[i].character;
    if (char.name === formattedName) {
      return char.images.jpg.image_url;
    }
  }
  console.log("nothing");
};

const CardContainer = function CardContainer({ setScore }) {
  const [cardData, setCardData] = useState(
    Array(narutoCharacters.length).fill({
      name: "Temp",
      image: null,
    })
  );
  const [cardsClicked, setCardsClicked] = useState([]);
  const hasFetched = useRef(false);

  const fetchCharacterImages = async function fetchCharacterImages() {
    const images = [];

    try {
      const response = await getAnimeCharacters();

      for (let i = 0; i < narutoCharacters.length; i++) {
        const name = narutoCharacters[i].name;

        const imageURL = await getCharacterImage(response.data, name);

        images.push({
          name,
          image: imageURL,
        });
      }

      return images;
    } catch (err) {
      console.error(err);
    }
  };

  const handleCardClick = function handleCardClick(e) {
    const character = e.currentTarget.dataset.name;

    if (cardsClicked.includes(character)) {
      setCardsClicked([]);
      setScore(0);
    } else {
      setCardsClicked([...cardsClicked, character]);
      setScore((score) => score + 1);
    }
  };

  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true;
      fetchCharacterImages().then(setCardData);
    }
  }, []);

  return (
    <main className="card-container">
      {cardData.map((data, index) => {
        return (
          <Card
            data={data}
            key={index}
            order={Math.floor(Math.random() * 15)}
            handleClick={handleCardClick}
          />
        );
      })}
    </main>
  );
};

export default CardContainer;
