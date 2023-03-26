import { render } from "@testing-library/react";
import Welcome from "./Welcome";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

describe("Render whole Welcome page", () => {
  const { getByTestId, getAllByTestId } = render(
    <Router>
      <Welcome />
    </Router>
  );
  test("Renders resident part", () => {
    expect(getByTestId("welcome-container")).toBeTruthy();
    expect(getByTestId("text")).toHaveTextContent("hi");
    expect(getByTestId("welcome-category-resident")).toBeTruthy();
    expect(getByTestId("img-logo-resident")).toBeTruthy();
    expect(getAllByTestId("custom-btn-resident")).toBeTruthy();
  });
});
