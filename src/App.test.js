//import deps etc
import React from "react";
import { render, fireEvent, waitFor, act } from "@testing-library/react";

//Do I need to import any other items from react testing? fireEvnt, waitfor, act??
//import and create mock
import { fetchShow as mockFetchShow } from "./api/fetchShow";
//import App
import App from "./App";

//create jest mock
jest.mock("./api/fetchShow");

//the test
//mock data
//arrange, act, assert
//which method ??

test("App fetches show data and renders it", async () => {
  //create mock var object
  const mockData = {
    id: "123",
    image: { medium: "medium_image" },
    name: "name",
    season: 3,
    number: 2,
    summary: "<p>Summary</p>",
    runtime: 20,
  };
  //fetch resolved mock data
  mockFetchShow.mockResolvedValueOnce(mockData);

  const { queryAllByText } = render(<App />);
  // now wait
  await waitFor(() => expect(queryAllByText(/name/i)).toHaveLength(1));
});
