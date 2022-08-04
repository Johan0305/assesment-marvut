import { describe, test } from "vitest";
import { render } from "@testing-library/react";
import CardInfo from "../components/CardInfo";

describe("test CardInfo", () => {
  test("should be rendered component", () => {
    const info = {
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      name: "Morty Smith",
      species: "Human",
      status: "Alive",
    };
    render(<CardInfo info={info} />);
  });
});
