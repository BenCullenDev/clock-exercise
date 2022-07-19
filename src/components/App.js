import React, { useEffect, useState } from "react";

function App() {
	const [clockState, setClockState] = useState();

	useEffect(() => {
		setInterval(() => {
			const date = new Date();
			setClockState(date.toLocaleTimeString());
		}, 1000);
	}, []);

	return <div>{clockState}</div>;
}

export default App;
