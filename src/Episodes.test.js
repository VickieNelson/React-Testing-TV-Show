//imports

import React from "react";
import { render, fireEvent, waitFor, act } from "@testing-library/react";
import Episodes from "./components/Episodes";

//the test
//mock data
//what needs to render
//what methods? getBy query rerender
//expect what?
//rerender what?
//expect what?

test("Renders Episodes without props, and again with props", () => {
  const mockData = {
    id: "123",
    image: { medium: "medium_image" },
    name: "name",
    season: 3,
    number: 2,
    summary: "<p>Summary</p>",
    runtime: 20,
  };
  const { queryAllByText, rerender } = render(<Episodes episodes={[]} />);
  //get all by season
  expect(queryAllByText(/season/i) === null);
  //rerender
  rerender(<Episodes episodes={[mockData]} />);
  //get all name
  expect(queryAllByText(/name/i)).toHaveLength(1);
});
