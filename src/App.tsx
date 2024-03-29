import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from './components/Layout'
import Home from './pages/Home'
import Tst from "./pages/Tst"
import Intro from "./pages/live/Intro";
import Form from "./pages/styling/Form";

const App: React.FC = () => {
    return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />}/>
				<Route path="tst" element={<Tst />} />
				<Route path="live/intro" element={<Intro />} />
				<Route path="styling/form" element={<Form />} />
			</Route>
		</Routes>
	)
};

export default App;
