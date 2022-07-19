import { render, fireEvent, screen } from "@testing-library/react";
import App from "../src/components/App.js";

test("clock", () => {
	render(<App />);

	//select the elements you want to interact with
	const clock = screen.getByTestId("clock");

	//assert the expected result
	expect(clock).toBeInTheDocument;
});
