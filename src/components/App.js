import React, { useEffect, useState } from "react";
import "../style.css";

function App() {
	const [clockState, setClockState] = useState();

	useEffect(() => {
		setInterval(() => {
			const date = new Date();
			setClockState(date.toLocaleTimeString());
		}, 1000);
	}, []);

	return <div className='clock'>{clockState}</div>;
}

export default App;
