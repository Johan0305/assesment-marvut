import { useEffect } from "react";
import { fetchAllCharacters } from "../features/apiRandM/rickandmorty";
import { useDispatch, useSelector } from "react-redux/es/exports";
import CardInfo from "./CardInfo";

const Main = () => {
  const dispatch = useDispatch();
  const { characters } = useSelector((state) => state.charactersRickandMorty);

  const handleScroll = () => {
    console.log("hi");
  };

  useEffect(() => {
    dispatch(fetchAllCharacters());
    window.addEventListener("scroll", handleScroll);
  }, []);

  console.log(characters);
  return (
    <main>
      <div className="gridContainer">
        {characters.map((item) => (
          <CardInfo info={item} />
        ))}
      </div>
    </main>
  );
};

export default Main;
