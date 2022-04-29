import { render } from "@testing-library/react";
import { useRouter } from "next/router";
import { Header } from ".";

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
      <Header href="/" activeClassName="active">
        <a href="#">Home</a>
      </Header>
    );
    expect(getByText("Home")).toBeInTheDocument();
  });
});
