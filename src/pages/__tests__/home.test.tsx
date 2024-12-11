import { render, screen } from "../../utils/test-utils";
import Home from "../Home";

test("renders Home page", () => {
  render(<Home />);
  const title = screen.getByRole("heading", { name: /Dinner Time/i });
  expect(title).toBeInTheDocument();
});
