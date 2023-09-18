import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("It should render a header ", () => {
  render(<Header text="Hello, World!" />);

  const headingElement = screen.getByRole("heading", { name: /Your Balance/i });
  expect(headingElement).toBeInTheDocument();
});
