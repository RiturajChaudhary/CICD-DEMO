import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home page", () => {
  it("renders the heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 1, name: /CI\/CD Demo/i })
    ).toBeInTheDocument();
  });

  it("renders the description text", () => {
    render(<Home />);
    expect(
      screen.getByText(/Next\.js application built with pnpm\./i)
    ).toBeInTheDocument();
  });
});
