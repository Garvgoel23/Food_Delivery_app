import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";
import mockdata from "../../mocks/resCardMockData.json";
it("should render RestaurantCard component correctly with props", () => {
  render(<RestaurantCard resData={mockdata} />);

  const name = screen.getByText("Theobroma");
  expect(name).toBeInTheDocument();
});
