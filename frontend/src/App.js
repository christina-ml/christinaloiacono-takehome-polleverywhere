import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./App.scss";
import NavBar from "./components/NavBar";

function App() {
	return (
		<div className="App">
			<main>
                <NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
