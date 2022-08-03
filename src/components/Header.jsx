import { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState("");
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
        <button>Search</button>
      </div>
    </header>
  );
};

export default Header;
