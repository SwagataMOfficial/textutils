// import Spinner from './components/Spinner.js';
import React, { useState } from 'react';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import LoadingBar from 'react-top-loading-bar';
import About from './components/About.js';
import Error from './components/Error.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	const [progress, setProgress] = useState(0);
	const [theme, setTheme] = useState('light');
	let themeColors = {
		'textColor': 'black',
		'bgColor': 'white',
		'barColor': '#00ff45'
	};


	function updateThemeColors(textColor, bgColor, barColor) {
		themeColors.textColor = textColor;
		themeColors.bgColor = bgColor;
		themeColors.barColor = barColor;
		document.body.style = `background: ${themeColors.bgColor};`;
	}

	return (
		<>
			<Router>
				<Navbar title="TextUtils" theme={theme} setTheme={setTheme} themeColors={themeColors} updateThemeColors={updateThemeColors} />
				{/* <Spinner /> */}
				<LoadingBar color={themeColors.barColor} progress={progress} onLoaderFinished={() => setProgress(0)} />
				<Routes>
					<Route exact path='/' element={<TextForm setProgress={setProgress} theme={theme} themeColors={themeColors} />} />
					<Route exact path='/about' element={<About theme={theme} themeColors={themeColors} />} />
					<Route exact path='/*' element={<Error />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;