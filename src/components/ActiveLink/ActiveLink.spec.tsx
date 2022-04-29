import { render } from "@testing-library/react";
import { useRouter } from "next/router";
import { ActiveLink } from ".";

jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        asPath: "/",
      };
    },
  };
});

describe("ActiveLink component", () => {
  it("render correctly", () => {
    const { getByText } = render(
      <ActiveLink href="/" activeClassName="active">
        <a href="#">Home</a>
      </ActiveLink>
    );

    expect(getByText("Home")).toBeInTheDocument();
  });

  it("adds active class if the link as currently active", () => {
    const { getByText } = render(
      <ActiveLink href="/" activeClassName="active">
        <a href="#">Home</a>
      </ActiveLink>
    );

    expect(getByText("Home")).toHaveClass("active");
  });
});
