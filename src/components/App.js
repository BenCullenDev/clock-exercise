import React, { useEffect, useState } from "react";
import "../style.css";

function App() {
	const [clockState, setClockState] = useState();
	const [dateState, setDateState] = useState();

	useEffect(() => {
		setInterval(() => {
			const time = new Date();
			setClockState(time.toLocaleTimeString());
		}, 1000);
		const date = new Date();
		setDateState(date.toLocaleDateString());
	}, []);

	return (
		<div className='clock'>
			{clockState}
			<br></br>
			{dateState}
		</div>
	);
}

export default App;
