import { describe, test } from "vitest";
import { render } from "@testing-library/react";
import ModalView from "../components/ModalView";

describe("test Header", () => {
  test("should be rendered component", () => {
    const info = {
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      name: "Morty Smith",
      species: "Human",
      status: "Alive",
    };
    render(<ModalView info={info} />);
  });
});
