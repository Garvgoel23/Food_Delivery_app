import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";

// Mock fetch
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(MOCK_DATA),
    }),
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

it("Should render Body component with Search functionality", async () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>,
  );

  const searchInput = await screen.findByTestId("searchId");
  const searchBtn = screen.getByRole("button", { name: /search/i });

  expect(searchBtn).toBeInTheDocument();

  fireEvent.change(searchInput, {
    target: { value: "burger" },
  });

  fireEvent.click(searchBtn);

  const cards = await screen.findAllByTestId("resCard");
  expect(cards.length).toBe(1);
});

it("Should filter top rated restaurants when 'Top Rated Restaurants' button is clicked", async () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>,
  );

  await screen.findAllByTestId("resCard");

  const topRatedBtn = screen.getByRole("button", {
    name: /top rated restaurants/i,
  });

  fireEvent.click(topRatedBtn);

  const cards = await screen.findAllByTestId("resCard");
  expect(cards.length).toBe(8);
});
