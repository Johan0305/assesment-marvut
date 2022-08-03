import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  const [buttonClick, setButtonClick] = useState(false);
  const [search, setSearch] = useState("");

  console.log(buttonClick);
  return (
    <>
      <Header
        setSearch={setSearch}
        search={search}
        setButtonClick={setButtonClick}
      />
      <Main buttonClick={buttonClick} search={search} />
    </>
  );
};

export default App;
