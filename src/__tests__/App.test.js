// The component renders correctly
// The component handles text changes
// On button click the input is cleared
//

// mock the module
//
import { render, screen, fireEvent } from "@testing-library/react";
import { getJokesRandom } from "../api"
import App from "../App";

jest.mock("../api", () => ({
  getJokesRandom: jest.fn()
}));

describe("App", () => {
  describe("on button click", () => {
    test("the input gets cleared",async () => {
      getJokesRandom.mockReturnValueOnce("Test Joke");

      render(<App />);

      expect(await screen.findByRole("textbox")).toHaveValue("Test Joke")
      const button = screen.getByRole("button");
      fireEvent.click(button)

      expect(screen.getByRole("textbox")).toHaveValue("")
    })
  })

  describe("on mount", () => {
    test("fetch the intput value from the api", async () => {
      getJokesRandom.mockReturnValueOnce("Test Joke");

      render(<App />);

      const text = await screen.findByRole("textbox");

      screen.logTestingPlaygroundURL();

      expect(text.value).toEqual("Test Joke")
    });
  });

});

