import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./App.scss";
import NavBar from "./components/navigation/NavBar";
import SingleRaffle from "./components/SingleRaffle";

function App() {
	return (
		<div className="App">
			<main>
                <NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/raffles/:id" element={<SingleRaffle />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
