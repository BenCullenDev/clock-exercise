import { render, fireEvent, screen } from "@testing-library/react";
import App from "../src/components/App.js";

test("clock", () => {
	render(<App />);
	const clock = screen.getByTestId("clock");
	expect(clock).toBeInTheDocument;
});
