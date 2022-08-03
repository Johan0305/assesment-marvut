import { useEffect, useState } from "react";
import {
  getSomeCharacters,
  moreCharacters,
  updateNumberSlice,
  updatePageMain,
} from "../features/apiRandM/rickandmorty";
import { useDispatch, useSelector } from "react-redux/es/exports";
import CardInfo from "./CardInfo";
import { CircularProgress } from "@mui/material";
import ModalView from "./ModalView";

const Main = ({ buttonClick, search }) => {
  const dispatch = useDispatch();
  const { characters, number, page, loading } = useSelector(
    (state) => state.charactersRickandMorty
  );
  const [open, setOpen] = useState(false);
  const [infoModal, setInfoModal] = useState({});

  useEffect(() => {
    dispatch(moreCharacters(number, number + 8, page));
    dispatch(updateNumberSlice(8));
  }, []);

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight &&
      characters.length < 826
    ) {
      if (characters.length % 20 === 0) {
        if (search === "") {
          dispatch(updatePageMain(page + 1));
          dispatch(moreCharacters(number, number + 8, page + 1));
          dispatch(updateNumberSlice(number >= 16 ? 0 : number + 8));
        } else {
          dispatch(updatePageMain(page + 1));
          dispatch(
            getSomeCharacters(
              number,
              number + 8,
              page + 1,
              search.toLowerCase(),
              characters.length
            )
          );
          dispatch(updateNumberSlice(number >= 16 ? 0 : number + 8));
        }
      } else {
        if (search === "") {
          dispatch(moreCharacters(number, number + 8, page));
          dispatch(updateNumberSlice(number >= 16 ? 0 : number + 8));
        } else {
          dispatch(
            getSomeCharacters(
              number,
              number + 8,
              page,
              search.toLowerCase(),
              characters.length
            )
          );
          console.log(number);
          dispatch(updateNumberSlice(number >= 16 ? 0 : number + 8));
        }
      }
    }
  };

  console.log(characters);
  return (
    <main>
      <ModalView info={infoModal} open={open} setOpen={setOpen} />
      {buttonClick === false ? (
        <div className="gridContainer">
          {loading === true ? (
            <CircularProgress />
          ) : (
            characters.map((item) => (
              <CardInfo
                info={item}
                setOpen={setOpen}
                key={item.id}
                setInfoModal={setInfoModal}
              />
            ))
          )}
        </div>
      ) : (
        <CircularProgress />
      )}
      {characters.length === 826 && <h2>No more characters</h2>}
    </main>
  );
};

export default Main;
