import { useDispatch } from "react-redux";
import {
  getSomeCharacters,
  setList,
  updateNumberSlice,
  updatePageMain,
} from "../features/apiRandM/rickandmorty";

const Header = ({ search, setSearch, setButtonClick }) => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    setButtonClick(true);
    dispatch(setList());
    dispatch(updatePageMain(1));
    dispatch(updateNumberSlice(8));
    dispatch(getSomeCharacters(0, 8, 1, search.toLowerCase()));
    setButtonClick(false);
  };

  return (
    <header>
      <div className="containerMarvut">
        <p>Marvut</p>
      </div>
      <div className="containerSearch">
        <input
          type="text"
          value={search}
          placeholder="Search by name"
          onChange={({ target }) => setSearch(target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
    </header>
  );
};

export default Header;
