import { render, screen } from "../../utils/test-utils";
import Home from "../Home";

test("renders Home page", () => {
  render(<Home />);
  const title = screen.getByRole("heading", {
    name: /What do I feel like eating?/i,
  });
  expect(title).toBeInTheDocument();

  const decideBtn = screen.getByRole("button", {
    name: /Decide for me!/i,
  });
  expect(decideBtn).toBeInTheDocument();
});
